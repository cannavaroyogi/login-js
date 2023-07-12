const express = require('express')
const router = express.Router()
const path = require('path');


const userController = require('./../controllers/user.controller')
const authMiddleware = require('./../middlewares/auth.middleware')
// router.use(express.static('./../../static'));

// router.get('/', (req, res) => {
//     res.sendFile('./../../static/login.html');
// })

router.post('/', userController.findUser);
router.get('/dashboard', authMiddleware.verifyToken, function (req, res) {
    // The user is authenticated, handle the dashboard request
    // You can access the user ID via req.userId
    res.status(200).json({ message: 'Access granted to dashboard' });
});

// router.get('/', (req, res) => {
//     res.sendfile(__dirname + './../../static/login.html');
// })

module.exports = router;