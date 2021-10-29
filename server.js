const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");


// Create Express Server
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0"
let url = "http://universities.hipolabs.com/search?country=Nigeria";

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
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
