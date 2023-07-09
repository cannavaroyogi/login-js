const BestProduct = require('../models/bestproduct.model');

exports.findAll = function (req, res) {
    BestProduct.findAll(function (err, bestproduct) {
        if (err) res.send(err);
        if (bestproduct !== null) {
            res.status(200).json({error:false,data:bestproduct});
        } else {
            res.status(404).json({error:true,message:"best product data not found"});
        }
    });
};