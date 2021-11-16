const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log("Server started at Port Number 4000")
})
app.get('/coloredBackground', (req, res) => {

  console.log(req.query.color)

 
   if (req.query.color != ""){
     const color ="#"+req.query.color
   console.log("Query parameter:" + color)
     res.send(`<body style="background-color: ${color}">web page body</body>`)
   }
   else {
     res.send(`<body style="background-color:black">web page body</body>`)
   }
})