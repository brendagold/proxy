const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const favicon = require('express-favicon');
var cors_proxy = require('cors-anywhere');


// Create Express Server
const app = express();


app.use(favicon(__dirname + '/public/favicon.ico'));
// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"
let url = "http://universities.hipolabs.com/search?country=Nigeria";


// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// })

const corsOptions ={
  origin:'*', 
  credentials:true,         //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

let settings = { method: "Get" };
let result;
fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    
    app.get("/", (req, res) => {
        res.send(json);
      });
    
  });

console.log(result);

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
