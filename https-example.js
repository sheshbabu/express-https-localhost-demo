const fs = require("fs");
const https = require("https");

const express = require("express");

const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World\n");
});

https.createServer({ key, cert }, app).listen(3001);
