const express = require('express')
const router = express.Router()

const userController = require('./../controllers/user.controller')

router.post('/', userController.findUser);

// router.get('/', (req, res) => {
//     res.sendfile(__dirname + './../../static/login.html');
// })

module.exports = router;