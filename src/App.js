import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { pageText: 
      `<p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>` 
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div dangerouslySetInnerHTML={{__html: this.state.pageText}}></div>
          <button onClick={() => this.setState({ pageText: 'Super Fun text' })}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
