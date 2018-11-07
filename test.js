"use strict";
const Geo = require('./lonLat.js');

var earth = new Geo(3959);


const atlanta = {
    latitude: 33.7490,
    longitude: -84.3880
  }
  
const london = {
    latitude: 51.5074,
    longitude: -0.1278
  }
console.log(earth.distance(atlanta, london));


