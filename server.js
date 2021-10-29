const fetch = require("node-fetch");
const express = require("express");
const favicon = require('express-favicon');

// Create Express Server
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
let url = "http://universities.hipolabs.com/search?country=Nigeria";

app.use(favicon(__dirname + '/public/favicon.ico'));

let settings = { method: "Get" };
let result;
fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    
    app.use("/", (req, res) => {
        res.send(json);
      });
    
  });

console.log(result);

// Start Proxy
app.listen(PORT, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
