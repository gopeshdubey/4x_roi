var express = require('express')
var router = express.Router()

var controller = require('../controller/users')


router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router;
