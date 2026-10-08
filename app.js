const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute.js')
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/userdb')


    .then(()=> console.log("connected successfully"))
    .catch(err=>console.log(err))
app.use('/users',userRoute);
app.listen(3000,()=>{
    console.log(`server running at http://localhost:3000`)
})