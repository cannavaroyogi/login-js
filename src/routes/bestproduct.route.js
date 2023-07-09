const express = require('express')
const router = express.Router()
const path = require('path');


const bestproductController = require('./../controllers/bestproduct.controller')

router.get('/', bestproductController.findAll);


module.exports = router;