const mongoose = require('mongoose')
const password = 'sHDFB70ZcVuaROAU' //database user's password
const dbname = 'signup' // database name
const user_name = 'paul'
const dburl =`mongodb+srv://${user_name}:${password}@cluster0.rwuna.mongodb.net/${dbname}?retryWrites=true&w=majority`

async function Init(){
    await mongoose.connect(dburl)
}
Init()
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const db_model = mongoose.model('testbeque2', userschema)

module.exports ={
    db_model
}