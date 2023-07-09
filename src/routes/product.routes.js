const express = require('express')
const router = express.Router()
const path = require('path');


const productController = require('./../controllers/product.controller')

router.get('/', productController.findAll);

router.get('/:name', productController.findNameProduct);


module.exports = router;