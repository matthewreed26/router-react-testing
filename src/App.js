import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextList } from './components/text-list/text-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = { pageTexts: [] }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ pageTexts: users }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TextList texts={this.state.pageTexts}></TextList>
        </header>
      </div>
    );
  }
}

export default App;
