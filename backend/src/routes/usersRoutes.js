const router = require('express').Router()

const userController = require('../Controllers/usersController.js')

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)

module.exports = router
