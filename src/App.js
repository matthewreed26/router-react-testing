import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>{/* this matches to the first route below */}
          <Route exact path='/' component={HomePage} />
          <Route path='/other' component={HomePage} />
          <Route path='/other/:otherId' component={HomePage} />
          {/* :otherId matches dynamically and passes to HomePage props as props.match.params.otherId */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
