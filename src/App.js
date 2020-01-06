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
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ pageTexts: users }))
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
          <SearchBox placeholder='name search' handleChange={e => this.setState({ searchField: e.target.value })}></SearchBox>
          <TextList texts={filteredTexts}></TextList>
        </header>
      </div>
    );
  }
}

export default App;
