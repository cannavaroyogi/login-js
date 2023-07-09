const express = require('express')
const router = express.Router()
const path = require('path');


const userController = require('./../controllers/user.controller')

// router.use(express.static('./../../static'));

// router.get('/', (req, res) => {
//     res.sendFile('./../../static/login.html');
// })

router.post('/', userController.findUser);


// router.get('/', (req, res) => {
//     res.sendfile(__dirname + './../../static/login.html');
// })

module.exports = router;