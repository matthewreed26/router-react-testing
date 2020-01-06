import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { pageTexts: 
      [
        {
          id: '1',
          displayText: 'fun'
        },
        {
          id: '2',
          displayText: 'more fun'
        },
        {
          id: '3',
          displayText: 'most fun'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
    this.state.pageTexts.map(pageText => <div key={pageText.id}>{ pageText.displayText }</div>)
          }
        </header>
      </div>
    );
  }
}

export default App;
