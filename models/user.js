const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    age: {
        type:Number,
        min:0
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }

})
const user = mongoose.model('user',userSchema)
module.exports=user