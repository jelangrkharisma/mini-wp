const Router = require('express').Router()

const UserController = require('../controllers/userController')

// signup
Router.post('/signup', UserController.signup)
Router.post('/signin', UserController.signin)
Router.post('/verify', UserController.verifyToken)


module.exports = Router