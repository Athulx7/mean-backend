const mongoose  = require('mongoose')

const connectionstring = process.env.DATABASE;

mongoose.connect(connectionstring).then((res)=>{
    console.log('mongo DB connected successfully')
}).catch((err)=>{
    console.log("mongoDB connected faild")
    console.log(err)
})