import React, {Component} from 'react';

class Filters extends Component{
    constructor(props) {
        super(props)
        this.state = {
          sortingFields: this.props.filters,
        }
      }
    changeFilter = (e) => {
        let sortingFields = { ...this.state.sortingFields };
        sortingFields[e.target.id] = e.target.value;

        this.setState({
            sortingFields,
        })
    }

    onClickFilter = () => {
        this.props.changeData(this.state.sortingFields);
    }

    onClickReset = () => {
        let emptySortingFields = { ...this.state.sortingFields };
        for (let prop in emptySortingFields) {
            emptySortingFields[prop] = '';
        }

        this.setState({
            sortingFields: emptySortingFields,
        })
        this.props.changeData();
    }

    render() {
    const elements = this.props.data;
    return (
        <div>
        {elements.map((value, index) => {
            return  (<div>
                    <div style={{width: '150px'}}>
                        {value}
                    </div>
                    <input type="text" id={value} onChange={this.changeFilter} value={this.state.sortingFields[value]} key={index}/>
                </div>)
        })}
            <button onClick={this.onClickFilter} style={{margin: '5px 3px 0 0'}}>Apply filters</button>
            <button onClick={this.onClickReset}>Reset filters</button>
        </div>
    )}
}

export default Filters;