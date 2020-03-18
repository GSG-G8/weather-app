import React from 'react';
import './App.css';
import { getCity } from './components/fetch';
export default class App extends React.Component {

  state = {
    result: 'gaza'
  };
  
  resultInput = e => this.setState({result: e.target.value.trim().replace(/\s+/g, ' ')});

  searchButton = () =>  getCity(this.state.result);

  render() {
    // const {result} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>hi </h1>
          <input type='text' onChange={this.resultInput} /> <br/>
          <button type='text' onClick={(this.searchButton)} > search </button>
        </header>
      </div>
    );
  }
}

