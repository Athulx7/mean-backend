const router = require('./Routes/router')
const userRouter = require('./Routes/userRoutes')
require('dotenv').config()
const express = require('express')
require('./DB/conccection')

const cors = require('cors')


const cartServer = express()
cartServer.use(cors())

cartServer.use(express.json())
cartServer.use(router)
cartServer.use(userRouter)
const PORT = 4000;

cartServer.listen(PORT,()=>{
    console.log(`cart server is running in ${PORT}`)
})

cartServer.get('/',(req,res)=>{
    res.send("the cart server is running")
})