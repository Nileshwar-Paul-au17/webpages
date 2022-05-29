const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    expenseName:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        default:0
    },
    tags:{
        type:Array
    },
    createdBy:{
        type: ObjectId,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports= mongoose.model('Expenses',expenseSchema);