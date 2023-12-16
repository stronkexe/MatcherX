const router = require('express').Router()
const authController = require('../Controllers/authController')

router.get('/', authController.login)

module.exports = router
