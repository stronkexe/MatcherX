const { Router } = require("express")
const userController = require("./src/Controller/userController")

const router = Router()

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)

module.exports = router