import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path='/' component={HomePage} />
        <Route path='/other' component={HomePage} />
      </header>
    </div>
  );
}

export default App;
