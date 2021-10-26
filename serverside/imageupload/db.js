const mongoose = require('mongoose')

const password = 'sHDFB70ZcVuaROAU'
let dburl ='mongodb+srv://paul:sHDFB70ZcVuaROAU@cluster0.rwuna.mongodb.net/signup?retryWrites=true&w=majority' 
async function Init(){
    await mongoose.connect(dburl)
}

module.exports = {
    Init
}