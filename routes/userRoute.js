const express = require('express')
const router = express.Router()
const User =  require('../models/user.js')
router.post('/add',async(req,res)=>{
    try{
        const User = new User(req.body)
        const savedUser = await User.save()
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
module.exports=router;