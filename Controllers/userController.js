const users = require('../Models/userModel')
const jwt = require('jsonwebtoken') 
exports.registerUser = async(req,res)=>{
    // console.log("inide usercontroller register")
    try{
        const {username,email,password} = req.body
        // console.log(email,username,password)
        const existingUser = await users.findOne({email : email})
        if(existingUser){
            res.status(406).json("account is already exist")
        }
        else{
            const newUser = users({
                username:username,
                email:email,
                password:password
            })
            await newUser.save()
            res.status(201).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}   



exports.login = async(req,res)=>{
    // console.log("inside login controller")
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userid:existingUser._id},process.env.LOGINKEY)
            res.status(201).json({data:existingUser,token:token})
        }
        else{
            res.status(406).json("invalid email or password")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}