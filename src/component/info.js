import React, { Component } from 'react';
import '../app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getPersonas } from '../utils';

class info extends Component { 
  render() {
    let fullPersonaList = getPersonas();        
    let urlPersona = this.props.match.params.name;
    let currentPersona = '';

    fullPersonaList.map(persona => {
      if (persona.name.toLowerCase() === urlPersona.toLowerCase()) {
        currentPersona = persona;
      }
    });
    
    return (
    <div>
      <center>
      <table>
      <thead>
        <tr>
          <td>{currentPersona.name}</td>
        </tr>
        <tr>
          <td>Lvl {currentPersona.lvl}</td>
          <td>{currentPersona.arcana}</td>
        </tr>
      </thead>
      </table>
      <br/><br/>
      <table>
      <thead>
        <tr>
          <td>Stats/Attributes</td>
        </tr>
        <tr>
          <td>Strength</td>	
          <td>Magic</td>
          <td>Endurance</td>
          <td>Agility</td>
          <td>Luck</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currentPersona.st}</td>
          <td>{currentPersona.ma}</td>
          <td>{currentPersona.en}</td>
          <td>{currentPersona.ag}</td>
          <td>{currentPersona.lu}</td>
        </tr>
      </tbody>
      </table>
      <br/><br/>
      <table>
      <thead>
        <tr>
          <td>Elementals</td>
        </tr>
        <tr>
          <td>Bless</td>	
          <td>Curse</td>
          <td>Electric</td>
          <td>Fire</td>
          <td>Gun</td>
          <td>Ice</td>
          <td>Physical</td>
          <td>Psychic</td>
          <td>Nuclear</td>
          <td>Wind</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currentPersona.bless}</td>
          <td>{currentPersona.curse}</td>
          <td>{currentPersona.electric}</td>
          <td>{currentPersona.fire}</td>
          <td>{currentPersona.gun}</td>
          <td>{currentPersona.ice}</td>
          <td>{currentPersona.phys}</td>
          <td>{currentPersona.psy}</td>
          <td>{currentPersona.nuclear}</td>
          <td>{currentPersona.wind}</td>
        </tr>
      </tbody>
      </table>
      <br/><br/>
      <table>
      <thead>
        <tr>
          <td>Skills</td>
        </tr>
        <tr>
          <td>Level</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(currentPersona.skills).map((s) =>
          <tr>
              <td key={currentPersona.skills[s]}>{currentPersona.skills[s]}</td>
              <td key={s}>{s}</td>
          </tr>
        )}
      </tbody>
      </table>
    </center>
    </div>
    );
  }
}

export default info;
