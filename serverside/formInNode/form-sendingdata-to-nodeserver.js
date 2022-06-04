const express = require('express')

const app = express()

const PORT = 3030

app.use(express.urlencoded({extended:false}))


app.get('/survey',(req,res) => {
    res.sendFile(__dirname+'/form-sendingdata-to-nodeserver.html')
   
   // res.sendFile('C:/Users/intel/Desktop/Newfolder/webpages/serverside/formInNode/form-sendingdata-to-nodeserver.html')
   console.log(__dirname)
   console.log("hi")
   console.log(req.body)
})

app.get('/survey/submit',(req,res) => {  //If u are using method=GET in form this function executed
   
    console.log("submitted")
    let str = `<h1>name : ${req.query.name}</h1>
                <h1>email : ${req.query.emal}</h1>
                <h1>number : ${req.query.phone}</h1>`
    res.send(str)

})

app.post('/survey/submit',(req,res) => { //If u are using method=POST in form this function executed
   

    console.log("submitted by POST method")
    res.send(req.body)
    //res.send(str)
    console.log(req.body)

})



app.get('/category/:userinput',( req , res) => {
  //if user input /category/........anything in url then this function will work
    res.send(`<h1>you are on ${req.params.userinput} page</h1>`)
})




app.get('/category/:categoryName/:subCategoryName', (req, res) => {

    //if user input /category/subcategory in url then this function will work
    res.send(`<h1>Your are on ${req.params.categoryName} Page. Sub page: ${req.params.subCategoryName}</h1>`)
})


app.get('*',( req , res) => {

    res.sendFile(`${__dirname}/404.html`)
})
app.listen(PORT,()=>{
    console.log("Server Started")
})
