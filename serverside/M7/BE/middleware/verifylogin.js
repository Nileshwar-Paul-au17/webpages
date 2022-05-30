const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET
function verifyLogin(req, res, next) {
    const token = req.headers["access-token"]
    console.log(req.headers)
    if (!token) {
      return res.status(403).json({
        message: "Token not present"
      })
    } 
    //verifying the token if it is valid
     jwt.verify(token, SECRET, function (err, decodedData) {
      if (err) {
        return res.status(401).json({
          message: "Invalid Token"
        })
      }
      //Adding the decoded Data in req in order to access it in other middlewares
      req.userData = decodedData;
      // console.log(decodedData)
      next()
    });
  };

  module.exports={
      verifyLogin
  }