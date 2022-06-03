const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDb = require('./db.js');
const router = require('./routes/routes.js')

const app = express();
dotenv.config();

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static middleware
app.use(express.static('public'))
//server started
const PORT = process.env.PORT || 5000;

//connection to DB
connectDb();

app.listen(PORT, console.log(`Server started at ${PORT}`));
app.use(router)

