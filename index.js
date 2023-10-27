const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

const app = express();
const port = 4000;

 

app.get('/', (req, res) => {
  res.send('<h3> [+] step nodemone passed [+] </h3>');
});
app.get('/', (req, res) => {
  res.send('<h3> [+] step mongodb is loadding to connect ... [+] </h3>');
});
 
