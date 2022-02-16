// Call Express Api.
const express = require('express')
let fs = require('fs');
const app = express();

const PORT = 8000 || process.env.PORT ;
let c 

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})

fs.readFile('counter.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    c = parseInt(data);
 });

 app.get('/',(req,res)=>{
    c = c + 1
    fs.writeFile('counter.txt', `${c}`, function(err) {
        if (err) {
           return console.error(err);
        }
    
        console.log("Data written successfully!");
    })
    fs.readFile('counter.txt', function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
     });
    res.send(`<h1>${c} times this site visited</h1>`)
})
app.get('/reset',(req,res)=>{
    c=0
    fs.writeFile('counter.txt', `${c}`, function(err) {
        if (err) {
           return console.error(err);
        }
    
        console.log("Data written successfully!");
    })
    res.send(`<h1>Reset successful</h1>`)
})
app.get('*',(req,res)=>{
    
    res.send(`<h1>Enter a Valid Route</h1>`)
})