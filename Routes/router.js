const express = require('express')
const router = new express.Router()

const producController = require('../Controllers/productController')




router.get('/user/getallproducts',producController.getAllProducts)
router.get('/user/getproductdetailID/:id',producController.getProductById)



module.exports = router