'use strict'

import p from './data/personas.js';

export function getPersonas() {
  var arr = [];
  var pmap = p.personaMap[0];
  for (var key in pmap) {
      if (pmap.hasOwnProperty(key)) {
          var persona = pmap[key];
          persona.name = key;
          arr.push(persona);
      }
  }
  return arr;
};