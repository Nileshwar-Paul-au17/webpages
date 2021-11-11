const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()

const db = require('./db.js')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`app listening on port : ${port}`);
});

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/public/signup.html`)
})

app.post('/signup', generate_jwt_for_signup, async (req, res) => {

    console.log("successfully executed")
})

app.get('/login', async (req, res) => {
    res.sendFile(`${__dirname}/public/login.html`)

})
app.post('/login',generate_jwt_for_login , async (req, res) => {
    console.log("successfully executed")
})

app.get('/profile',check, async (req, res) => {
    console.log("executed successfully")
})



async function generate_jwt_for_signup(req, res, next) {
    try {
        const data = req.body
        const olduser = await db.db_model.findOne({ email: req.body.email })
        console.log(olduser)
        if(olduser === null) {
            const insertdata = await db.db_model.create(data)
            console.log("data inserted")
            const secretkey = "mykey"
            const jwttoken = jwt.sign({ user_name: req.body.email }, secretkey)
            res.json({
                error: false,
                message: "user details register",
                token: jwttoken
            })
           
            next()
        }
        else {
            res.send("User already exist can't register again")
        }
        next()
    }
    catch (err) {
        console.log("error occured")
        res.send("error occured")
    }
}

async function generate_jwt_for_login(req , res){
        const data = req.body
        const user_present = await db.db_model.findOne({ email: req.body.email ,password: req.body.password })
        console.log(user_present)
        if(user_present === null)
        {
            res.send("enter wrong credential")
        }
        else{
            const secretkey = "mykey"
            const jwttoken = jwt.sign({ user_name: req.body.email }, secretkey)
            res.json({
                error: false,
                message: "correct user details JWT generated ",
                token: jwttoken
            })
            next()
        }
}

async function check(req, res, next){
    try {
        const details = jwt.verify(req.query.token, "mykey")
        const profile_details = await db.db_model.findOne({ email: details.user_name })
        console.log(profile_details)
        res.send(
            `<h1>ProfilePage</h1>
        <h2>Name:${profile_details.name}</h2>
        <h2>Email:${profile_details.email}</h2>
        <h2>Password:${profile_details.password}</h2>
        <h2>Address:${profile_details.address}</h2>`
        )
    }
    catch (err) {
        res.send("Authentication Failed Provide valid JWT token")
    }
    next()
}