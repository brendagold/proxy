const express = require('express');
const fetch = require("node-fetch");


const routes = express.Router();

let url = "http://universities.hipolabs.com/search?country=Nigeria";
let settings = { method: "Get" };
let result;
fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    
    routes.get('/', (req, res) => {
        res.send(json);
      });
    
  });

console.log(result);




module.exports = routes;