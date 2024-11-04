const express = require('express')
const router = new express.Router()

const userController = require('../Controllers/userController')

router.post('/userRegister',userController.registerUser)
router.post('/userLogin',userController.login)

module.exports = router