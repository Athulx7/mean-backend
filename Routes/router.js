const express = require('express')
const router = new express.Router()

const producController = require('../Controllers/productController')
const jwtmiddldeware = require('../Middleware/jwtMiddleware')




router.get('/user/getallproducts',producController.getAllProducts)
router.get('/user/getproductdetailID/:id',producController.getProductById)

router.post('/user/addTowish',jwtmiddldeware,producController.addTowishlist)
router.get('/user/getAllwishItems',jwtmiddldeware,producController.getAllwishlistItems)
router.delete('/user/deleteWishlist/:id',jwtmiddldeware,producController.deleteWishlist)


router.post('/user/addtoCart',jwtmiddldeware,producController.addToCart)
router.get('/users/getallCartitem',jwtmiddldeware,producController.getCartItems)

router.get('/user/increPorduct/:id',jwtmiddldeware,producController.incrementProduct)
router.get('/user/decrement/:id',jwtmiddldeware,producController.decremmentProduct)
router.delete('/user/emptycart',jwtmiddldeware,producController.emptyCart)
router.delete('/user/remvoeitemcart/:id',jwtmiddldeware,producController.removeitemfromCart)




module.exports = router