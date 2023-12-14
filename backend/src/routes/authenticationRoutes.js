const router = require('express').Router()

const authenticationController = require('../Controllers/authenticationController.js')

router.get('/login', authenticationController.login)
router.get('/signup', authenticationController.signup)

module.exports = router
