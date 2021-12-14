import express from 'express';
import { readFile,writeFileSync } from 'fs';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 5050;
let count
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.listen(PORT, ()=>{console.log(`server started at port no ${PORT}`)})
readFile('response.txt',{encoding: 'utf8'},(error,data)=>{
    // Error first approach
    if(error){ 
        console.log('error:',error.message);
        return
    }
    count =Number(data)
    console.log(data)
})
app.get('/',counter)
app.get('/reset',reset);
function counter(req, res) {
    count = count + 1
    let Text_tobe_written_in_file=`${count}`
    writeFileSync('response.txt',Text_tobe_written_in_file)
    readFile('response.txt',{encoding: 'utf8'},(error,data)=>{
        // Error first approach
        if(error){ 
            console.log('error:',error.message);
            return
        }
        console.log(data)
    })
    res.sendFile(path.join(__dirname, '/response.txt'));  
}
function reset(req,res){
    count = 0
    let Text_tobe_written_in_file=`${count}`
    writeFileSync('response.txt',Text_tobe_written_in_file)
    res.send(`<h1>Reset successfully</h1>`)
}