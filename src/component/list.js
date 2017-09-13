import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getPersonas } from '../utils';

class list extends Component {
  constructor(props){
    super(props)
    let fullPersonaList = getPersonas();    
    this.state = {
        plist: fullPersonaList
    }
  }  
  render() {
    return (
      <center>
      <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Level</td>
          <td>Arcana</td>
        </tr>
      </thead>
      <tbody>
        {this.state.plist.map((p) =>
          <tr key={p.name}>
              <td key={p.name}><Link role="button" to={"/search/" + p.name}>{p.name}</Link></td>
              <td key={p.lvl}>{p.lvl}</td>
              <td key={p.arcana}>{p.arcana}</td>
          </tr>
        )}
      </tbody>
    </table>
    </center>
    );
  }
}

export default list;
