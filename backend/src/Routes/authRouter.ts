const router = require('express').Router()
const authController = require('../Controllers/authController.ts')


router.post('/login', authController.login)
router.post('/signup', authController.signup)

module.exports = router
