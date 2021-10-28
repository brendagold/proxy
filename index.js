const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const https = require("https");

// https.get('https://randomuser.me/api', (resp) => {
//   let data = '';
//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// Create Express Server
const app = express();

app.use(cors());
app.use(express.json());

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL =
  "http://universities.hipolabs.com/search?country=Nigeria";

const options = {
  target: API_SERVICE_URL,
  changeOrigin: true,
};
app.use("/", (req, res) => {
  req.get("http://universities.hipolabs.com/search?country=Nigeria");
});

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
