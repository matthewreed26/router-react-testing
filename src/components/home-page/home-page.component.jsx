import React, { Component } from 'react';
import TextList from '../text-list/text-list.component';
import { SearchBox } from '../search-box/search-box.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTexts } from '../../redux/text/text.actions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchField: ''
    }

    this.handleClickGetLogApp = this.handleClickGetUndefined.bind(this);
  }

  componentDidMount() {
    const { setTexts } = this.props;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setTexts(users))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
    const { setTexts, texts } = this.props;
    setTexts(texts.filter(text =>
      text.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    ));
  };

  handleClickGetUndefined() {
    console.log(this);
  }

  handleClickGetLog() {
    console.log("logging something");
  }

  render() {
    return (
      <div>
        <SearchBox placeholder='name search' handleChange={ this.handleChange }></SearchBox>
        <button onClick={this.handleClickGetUndefined}>Log Undefined</button>
        <button onClick={this.handleClickGetLog}>Log Something</button>
        <button onClick={this.handleClickGetLogApp}>Log App</button>
        <TextList></TextList>
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

const mapStateToProps = ({ text }) => ({
  texts: text.texts
});

const mapDispatchToProps = dispatch => ({
  setTexts: text => dispatch(setTexts(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
