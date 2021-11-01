 const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});

app.use(fun1) //calling middlewre
app.use(fun2) //calling middlewre




function fun1(req,res,next){
    console.log("middleware function fun1 triggered")
    next()  //this next() fun is telling to call the next middleware fun 
            // if dont call next here control get stuck here and will not go to line number 11 to call next middleware
}

function fun2(res,req,next){
    console.log("middleware function fun2 triggered")
    next() // telling go to line no 26 to call handler function of rout '/'
}
app.get('/', (req, res) => { //without entering the rout '/' in broser url this handler fun triggered because we calling next in fun2
    res.send(`Hello World! 
                <br> without entering the rout '/' in browser url this handler fun triggered because we calling next in fun2`)
    console.log(" / rout handler function executed")
});



//Run app, then load http://localhost:port in a browser to see the output.