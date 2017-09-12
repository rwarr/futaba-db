import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                <li><Link to="/about">List</Link></li>
                <li><Link to="/topics">About</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={home}/>
              <Route path="/about" component={about}/>
              <Route path="/topics" component={list}/>
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

const home = () => (
  <div>
    <h2></h2>
    <div>
      <input className="search"/>
      <button className="searchButton"></button>
    </div>
  </div>
)

const about = () => (
  <div>
    <h2>About</h2>
  </div>
)

const list = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App;
