import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          {
    this.state.pageTexts.map(pageText => <div key={pageText.id}>{ `My name is ${pageText.name}` }</div>)
          }
        </header>
      </div>
    );
  }
}

export default App;
