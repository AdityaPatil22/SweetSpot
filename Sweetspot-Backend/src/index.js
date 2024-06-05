const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

app.get("/", (req,res) =>{
  return res.status(200).send({message : "Welcome to SweetSpot"})
})

module.exports = app;
