const router = require('express').Router()
const cors = require('cors')
const authController = require('../Controllers/authController')

router.use(cors({
  cridentials: true,
  origin: `http://localhost:5173`
}))

router.post('/login', authController.login)
router.post('/signup', authController.signup)

module.exports = router
