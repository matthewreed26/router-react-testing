import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextList } from './components/text-list/text-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      pageTexts: [],
      searchField: ''
    }

    this.handleClickGetLogApp = this.handleClickGetUndefined.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ pageTexts: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };

  handleClickGetUndefined() {
    console.log(this);
  }

  handleClickGetLog() {
    console.log("logging something");
  }

  render() {
    const { pageTexts, searchField } = this.state;
    const filteredTexts = pageTexts.filter(text =>
      text.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox placeholder='name search' handleChange={ this.handleChange }></SearchBox>
          <button onClick={this.handleClickGetUndefined}>Log Undefined</button>
          <button onClick={this.handleClickGetLog}>Log Something</button>
          <button onClick={this.handleClickGetLogApp}>Log App</button>
          <TextList texts={filteredTexts}></TextList>
        </header>
      </div>
    );
  }
}

export default App;
