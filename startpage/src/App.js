import React from 'react';
//import './App.css';
import './style.css'


class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      currentValue: 'Search' 
    };
  }


  handleChange = event => {
    this.setState({currentValue: event.target.value})


  }

  render() {

    

    return (
      <div className="c">
        <a id="logo" ><i className="g fab"></i></a>
        <header className="App-header">
          <form id="searchform" className="search" action="" method="" onSubmit={this.doSearch}>
            <input className="search" id="input" type="text" placeholder="Search" onChange={this.handleChange} autoFocus></input>
          </form>

        </header>
      </div>
    );

  }

}




export default SearchField;
