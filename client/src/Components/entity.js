import React from 'react';
import api from '../Api/Api';
import MaterialTable from 'material-table';
import helper from '../Helpers/helper';

const API = new api();
const help = new helper();

class Entity extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      columns: [],
    }
  }

  updateState = async () => {
    const data = await API.getAll(this.props.entityName);

    this.setState({
      data: data,
    });
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
      <div style={{width: "-webkit-fill-available"}}>
        <MaterialTable
          title={`${this.props.publicName} table`}
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
      </div>
    );
  }
}

export default Entity;