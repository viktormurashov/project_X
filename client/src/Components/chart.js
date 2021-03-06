import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { ListItemIcon } from "@material-ui/core";
import './index.css';

class Chart extends Component{
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City',
  }

  changeYearOnClick = (operation) => {
    let year = this.props.currentYear;
    year = operation === '+' ? year+1 : year-1;
    this.props.changeYear(year);
  }

  onChangeHandler = (event) => {
    this.props.changePaymentUser(event.target.value);
  }

  render() {
    return (
      <div className="chart" style={{margin: '0 30px 0 30px'}}>
          <div style={{display: 'flex',margin: '15px 15px 0 15px'}}>
            <ListItemIcon class={'icon-year-change'} onClick={() => this.changeYearOnClick('-')} style={{minWidth: 0}}>
                <ArrowBackIcon/>
            </ListItemIcon>
            <div> 
                {this.props.currentYear}
            </div>
            <ListItemIcon class={'icon-year-change'} onClick={() => this.changeYearOnClick('+')} style={{minWidth: 0}}>
                <ArrowForwardIcon/>
            </ListItemIcon>
          </div>
          <div>
            <select onChange={this.onChangeHandler}>
              { this.props.users.map(item => (
                <option key={item.id} value={item.id}>
                  { item.name }
                </option>
              )) }
            </select>
          </div>
        <Bar
          data={this.props.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:`Summ of payment for year = ${this.props.totalSum}rub`,
              fontSize:14
            },
            legend:{
              display:this.props.displayLegend,
              position:"bottom"
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;