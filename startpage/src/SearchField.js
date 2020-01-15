import React from 'react';
//import './App.css';
import './style.css'
import './helper.js'


class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentValue: 'Search'
    };
  }


  handleChange = event => {
    this.setState({ currentValue: event.target.value })




  }
  handleSubmit = event => {
    event.preventDefault();
    lookup();
  }

  render() {


    return (
      <div className="c">
        <form id="searchform" className="search" method="" onSubmit={this.handleSubmit}>
          <input className="search" id="input" type="text" placeholder="Search" onChange={this.handleChange} autoFocus></input>
        </form>
      </div>
    );

  }

}




export default SearchField;
