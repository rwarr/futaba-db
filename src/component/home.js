import React, { Component, PropTypes } from 'react';
import '../app.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class info extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);    
  }

  render() {
    return (
      <div>
      <div><label>Search a persona</label></div>
      <input className="search" id="name" value={this.state.value} onChange={evt => this.updateInputValue(evt)} onKeyPress={this.handleKeyPress}/>
      <Link role="button" to={"/search/" + this.state.value}><img className="searchIcon" src={require('../img/s_icon.png')} /></Link>
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleKeyPress = (event) => {
    if(event.key.toString() === 'Enter'){
      this.props.history.push('/search/' + this.state.value)  
    }
  }
}

export default info;
