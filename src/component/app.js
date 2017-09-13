import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import about from './about.js';
import list from './list.js';
import info from './info.js';
import home from './home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Persona 5 Personas Database</h2>
        </div>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={home}/>
              <Route path="/about" component={about}/>
              <Route path="/list" component={list}/>
              <Route path="/search/:name" component={info}/>
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
