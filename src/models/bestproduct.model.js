var dbConn = require('./../../config/db');

var BestProduct = function (best_product) {
    this.code_product = best_product.code_product;
    this.name_product = best_product.name_product;
    this.price = best_product.price;
    this.is_ready = best_product.is_ready ? best_product.is_ready : true;
    this.image = best_product.image;
}; 

BestProduct.findAll = function (result) {
    dbConn.query("select * from best_products" , function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        if (res.length === 0) {
            console.log("Error: no data found");
            result(err, null);
        } else {
            result(null, res);
        }

    });
};

module.exports = BestProduct;