
const express = require("express");
const cors = require("cors");
const favicon = require('express-favicon');
var cors_proxy = require('cors-anywhere');
const routes = require('./routes');


// Create Express Server
const app = express();


app.use(cors());
app.use(express.json());


app.use(favicon(__dirname + '/public/favicon.ico'));


// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://brendagold.github.io/unilist/");
  res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"



// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// })

// const corsOptions ={
//   origin:'*', 
//   credentials:true,         //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }

// app.use(cors_proxy.createServer({
//   originWhitelist: [], // Allow all origins
//   requireHeader: ['origin', 'x-requested-with'],
//   removeHeaders: ['cookie', 'cookie2']
// }));
app.use(routes);



// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
