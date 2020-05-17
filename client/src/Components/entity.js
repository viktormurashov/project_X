import React from 'react';
import api from '../Api/Api';
import MaterialTable from 'material-table';
import helper from '../Helpers/helper';
import Chart from '../Components/chart';
import { GetFormattedDate, arr } from '../Helpers/const';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Filters from '../Components/filters'
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import './index.css';

const API = new api();
const help = new helper();

const TitleComponent = (publicName, logicName, func, data, sorting, expanded, handleExpandClick) => {
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div>{publicName} table</div>
        <IconButton
          className={expanded ? 'rotateButton' : ''}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <a href={`http://localhost:9000/test/excel${logicName}`} className={'icon-year-change'} style={{color: 'black', marginLeft: '5px'}}>
          <CloudDownloadIcon/>
        </a>
      </div>
      <Collapse in={expanded} timeout="auto" >
        <Filters changeData={func} data={data} filters={sorting}/>
      </Collapse>
    </div>
  )
}

class Entity extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      columns: [],
      graphsData: {},
      charData: {},
      currentYear: 2020,
      totalSum: 0,
      sortingFields: {},
      sortingNamesArray: [],
      previousData: [],
      expand: false,
    }
  }

  sortingForAllFields = (data) => {
    if (data) {
      let newData = { ...data}
      let previousData = this.state.previousData.slice();
      let newArrOfIndex =  new Set([]);
      let valCount = 0;
  
      for (let prop in newData) {
        previousData.forEach((val, index) => {
          let props = newData[prop] || '';
          if (prop === 'Salary' || prop === 'AssumedSalary') {
            if (val[prop] < +props) {
              newArrOfIndex.add(index);
            }
          } else {
            if (!val[prop].toString().includes(props)) {
              newArrOfIndex.add(index);
            }
          }
        })
      }
      let newArr = [...(newArrOfIndex)].sort((a,b)=>a-b)

      newArr.forEach(val => {
        previousData.splice(val-valCount, 1);
        valCount += 1;
      })
  
      this.setState({
        data: previousData,
      })
    }
    else {
      this.setState({
        data: this.state.previousData,
      })
    }
  }

  handleExpandClick = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  sortComponents = (data) => {
    if (data !== []) {
      let fields = {};
      let arra = [];

      fields = { ...data[0] }
    
      for (let prop in fields) {
        fields[prop] = '';
        arra.push(prop)
      }

      this.setState({
        sortingFields: fields,
        sortingNamesArray: arra,
      })
    }
  }

  updateState = async () => {
    const data = await API.getAll(this.props.entityName);
    let dataAfterParse = {};
    let graphsData = {};
    let charData = {};
    let totalSum = 0;

    if (this.props.entityName === 'deal') {
      data.map(field => {
        dataAfterParse = GetFormattedDate(new Date(field.DateOfDeal));
        field.DateOfDeal = dataAfterParse.newDate;

        if (graphsData[dataAfterParse.year]) {
          graphsData[dataAfterParse.year][dataAfterParse.monthNumber] = field.Commission + graphsData[dataAfterParse.year][dataAfterParse.monthNumber];
        } else {
          const ar = arr.slice();
          ar[dataAfterParse.monthNumber] = field.Commission;
          graphsData[dataAfterParse.year] = ar;
        }
      })
      const dataSet = graphsData[this.state.currentYear];

      graphsData[this.state.currentYear].map(month => {
        totalSum += month;
      })

      charData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label:'Rub',
            data: dataSet
          }
        ]
      }
    }

    this.sortComponents(data);

    this.setState({
      data,
      graphsData,
      charData,
      totalSum,
      previousData: data,
    });
  }

  changeGraphYear = (year) => {
    let chardata = this.state.charData;
    let graphArr = this.state.graphsData[year] ? this.state.graphsData[year].slice() : undefined;
    let totalSum = 0;

    if (graphArr === undefined) {
      graphArr = arr.slice();
    }

    graphArr.map(month => {
      totalSum += month;
    })

    chardata.datasets[0].data = graphArr;
    this.setState({
      currentYear: year,
      chardata,
      totalSum,
    })
  }

  addRow = async (newData) => {
    await API.postEntity(newData, this.props.entityName);
    await this.updateState();
  }

  updateRow = async (newData) => {
    await API.putEntity(newData, this.props.entityName);
    await this.updateState();
  }

  deleteRow = async (id) => {
    await API.deleteEntity(id, this.props.entityName);
    await this.updateState();
  }

  async componentDidMount() {
      const columns = help.getFieldsByName(this.props.entityName);

      this.setState({
          columns: columns,
      })
      await this.updateState();
  }

  render() {
    return (
      <div style={{width: "-webkit-fill-available", marginRight: '20px'}}>
        {
        Object.keys(this.state.sortingFields).length !== 0 && this.state.sortingNamesArray.length !== 0 ?
        <div>
          <MaterialTable
            title={TitleComponent(this.props.publicName, this.props.entityName, this.sortingForAllFields 
              , this.state.sortingNamesArray , this.state.sortingFields, this.state.expand, this.handleExpandClick)}
            columns={this.state.columns}
            data={this.state.data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    await this.addRow(newData);
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    {
                      const data = {...newData};
                      data[this.props.id] = oldData[this.props.id];
                      await this.updateRow(data);
                    }
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    await this.deleteRow(oldData[this.props.id]);
                    resolve();
                  }, 1000)
                }),
            }}
              />
              {
                this.state.charData.labels 
                ? <Chart chartData={this.state.charData} totalSum={this.state.totalSum} changeYear={this.changeGraphYear} currentYear={this.state.currentYear}/> 
                : <div/>
              }
            </div>
            : <div/>
            }
      </div>
    );
  }
}

export default Entity;