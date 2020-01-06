import React, { Component } from 'react';
import TextList from '../text-list/text-list.component';
import { SearchBox } from '../search-box/search-box.component';
import { Link } from 'react-router-dom';

class HomePage extends Component {
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
      <div>
        <SearchBox placeholder='name search' handleChange={ this.handleChange }></SearchBox>
        <button onClick={this.handleClickGetUndefined}>Log Undefined</button>
        <button onClick={this.handleClickGetLog}>Log Something</button>
        <button onClick={this.handleClickGetLogApp}>Log App</button>
        <TextList texts={filteredTexts}></TextList>
        <Link to='/other'>Route to /other</Link>
        <button onClick={() => this.props.history.push('/other')}>Also Routes to /other</button>
        <div>
          Current path: {this.props.location.pathname}
          Matched path: {this.props.match.url}
          {/* test by navigating to /other/something */}
        </div>
      </div>
    );
  }
}

export default HomePage;
