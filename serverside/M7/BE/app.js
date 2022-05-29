const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDb = require('./db.js');
const app = express();
dotenv.config();

//server started
const PORT = process.env.PORT || 5000;

//connection to DB
connectDb();

app.listen(PORT,console.log(`Server started at ${PORT}`));
