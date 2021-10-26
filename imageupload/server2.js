const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')  


const app = express();
app.use(fileUpload());
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000

const dbmodule = require('./db.js')
dbmodule.Init()

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
    }
})


const UserModel = mongoose.model('user', UserSchema)

app.listen(port, () => {
    console.log(`app listening on port : ${port}`);
});
app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/public/signup.html`)
})


app.post('/signup' , async (req, res) => {
    try{
        const data = req.body
       console.log(data)

        const filedata = req.files.imageurl

        console.log(filedata)
        
        //giving a unique name to file

        const filename = `${filedata.md5}-${filedata.name}` //"name" is name attribute in file input field of signup.html
        
        // set the path where file will store in server
        const filepath = `${__dirname}/public/userimage/${filename}`

        //save the path of image in database's imageurl

        data.imageurl = `/userimage/${filename}`

        //save the data of the form in database

        const insertdata = await UserModel.create(data)

        //move the uploaded image in our path

        filedata.mv(filepath)

        res.send(insertdata)
    }
    catch (err){
        res.send({
            error:true,
            errorObj:err
        })
    }
})

app.get('/users', async (req, res) => {
    const users = await UserModel.find({})
    res.send(users)
})

app.get("/allUsers", async (req, res) => {
    res.sendFile(`${__dirname}/public/allUsers.html`)
})
