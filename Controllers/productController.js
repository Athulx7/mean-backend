

// get all products 

const products = require("../Models/producModel")

exports.getAllProducts = async(req,res)=>{
    // console.log("inside getallproducts controller")
    try{

        const getProducts = await products.find()
        res.status(200).json(getProducts)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getProductById = async(req,res)=>{
    // console.log("inside geteproduct by id controller")
   
        const id = req.params 
        // console.log(id)

        try{
            const product = await products.find(id)
            res.status(200).json(product)

        }
    catch(err){
        res.status(401).json(err)
    }
}
