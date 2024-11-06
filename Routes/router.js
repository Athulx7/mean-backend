const express = require('express')
const router = new express.Router()

const producController = require('../Controllers/productController')
const jwtmiddldeware = require('../Middleware/jwtMiddleware')




router.get('/user/getallproducts',producController.getAllProducts)
router.get('/user/getproductdetailID/:id',producController.getProductById)

router.post('/user/addTowish',jwtmiddldeware,producController.addTowishlist)
router.get('/user/getAllwishItems',jwtmiddldeware,producController.getAllwishlistItems)



module.exports = router