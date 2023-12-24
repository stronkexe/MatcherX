const router = require('express').Router()

const usersController = require('../Controllers/userController')

router.get('/', usersController.getAllUsers)

module.exports = router
