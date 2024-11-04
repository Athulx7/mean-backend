const jwt = require('jsonwebtoken')

const jwtmiddldeware = (req,res,next)=>{
    console.log("inside jwt middleware")
    const token = req.headers['authorization'].split(' ')[1]
    try{
        const jwtResponce = jwt.verify(token, 'userpwd123')
        req.payload = jwtResponce.userid
        next()
    }
    catch(err){
        res.status(401).json(err)
    }
}

module.exports = jwtmiddldeware
