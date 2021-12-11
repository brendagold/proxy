
const express = require("express");
const cors = require("cors");
const favicon = require('express-favicon');
const routes = require('./routes');


// Create Express Server
const app = express();


app.use(cors());
app.use(express.json());


app.use(favicon(__dirname + '/public/favicon.ico'));


// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"


app.use(routes);



// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
