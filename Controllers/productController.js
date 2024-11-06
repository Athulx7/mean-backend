

// get all products 

const products = require("../Models/producModel")
const wishLists = require("../Models/wishListModel")

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




//add to wishlist

exports.addTowishlist = async(req,res)=>{
    console.log("inisde add to wishlist controller")

    // console.log(req.body)
    const {rating,id,title,price,description,category,image} = req.body
    const userID = req.payload
    // console.log(userID)
    try{

        const existProduct = await wishLists.findOne({id:id,userid:userID})
        if(existProduct){
            res.status(406).json(existProduct)
            // console.log(existProduct)
        }
        else{
            const newWishlistProduct = new wishLists({
                rating:rating,
                title:title,
                id:id,
                price:price,
                description:description,
                category:category,
                image:image,
                userid:userID
            })
            await newWishlistProduct.save()
            res.status(201).json(newWishlistProduct)
        }

    }
    catch(err){
        res.status(401).json(err)

    }

}


//get all wishlist products 

exports.getAllwishlistItems = async(req,res)=>{
    console.log("inside get all wishlisit items conroller")
    const userid = req.payload
    // console.log(userid)
    try{
        const result = await wishLists.find({userid:userid})
        res.status(201).json(result)

    }
    catch(err){
        res.status(401).json(err)
    }

}