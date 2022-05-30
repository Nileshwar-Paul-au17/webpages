const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDb = require('./db.js');
const router = require('./routes/routes.js')

// const multer = require('multer');
// const bcrypt = require('bcrypt');
// const base64 = require("js-base64");
// const cloudinary = require("cloudinary");
// const userModel = require('./model/userModel.js')
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.api_key,
//     api_secret: process.env.api_secret,
//     secure: true,
//   });

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

app.listen(PORT,console.log(`Server started at ${PORT}`));
app.use(router)

//const uploader = multer({ storage: multer.memoryStorage() });
// const signup = (req,res)=>{
//     try{
//         console.log(req.file.buffer);
//         console.log(req.body);
//         let stringdata = base64.encode(req.file.buffer);
//         cloudinary.v2.uploader.upload(
//             `data:${req.file.mimetype};base64,${stringdata}`,
//             function (error, result) {
//               console.log("result from cloudinary upload ",+result)
//             }
//           );
    
//     }
// catch(err){
       
//     res.status(501).send(err.message);
// }
//}
// app.post('/submit',uploader.single('image'),signup)