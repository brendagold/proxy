const express = require("express");
const fetch = require("node-fetch");

const routes = express.Router();

let url = "http://universities.hipolabs.com/search?country=Nigeria";
let settings = { method: "Get" };

routes.get("/", (req, res) => {
  return fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      return res.send(json);
    });
});

module.exports = routes;
