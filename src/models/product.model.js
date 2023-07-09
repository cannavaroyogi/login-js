var dbConn = require('./../../config/db');

var Product = function (product) {
    this.code_product = product.code_product;
    this.name_product = product.name_product;
    this.price = product.price;
    this.is_ready = product.is_ready ? product.is_ready : true;
    this.image = product.image;
}; 

Product.findAll = function (result) {
    dbConn.query("select * from products" , function (err, res) {
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

module.exports = Product;