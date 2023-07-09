const Product = require('../models/product.model');

exports.findAll = function (req, res) {
    Product.findAll(function (err, product) {
        if (err) res.send(err);
        if (product !== null) {
            res.status(200).json({error:false,data:product});
        } else {
            res.status(404).json({error:true,message:" product data not found"});
        }
    });
};

exports.findNameProduct = function (req, res) {
    Product.findNameProduct(req.params.name, function (err, product) {
        if (err) res.send(err);
        if (product !== null) {
            res.status(200).json({error:false,data:product});
        } else {
            res.status(404).json({error:true,message:" product data not found"});
        }
    });
}