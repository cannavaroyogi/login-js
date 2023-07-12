var dbConn = require('./../../config/db');
const jwt = require('jsonwebtoken');
const secretKey = 'mySuperSecret';

var User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.generateToken = function (userData, result) {
    const token = jwt.sign({id: userData.id}, secretKey);
    result(null, token);
}

User.findUser = function (userData, result) {
    dbConn.query("select * from users where username = ? and password = ?", [userData.username, userData.password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }

        if (res.length === 0) {
            console.log("Error: no data found");
            result(err, null);
        } else {
            User.generateToken(res[0], function (err, token) {
                if (err) {
                    console.log('Token generation error:', err);
                    result(err, null);
                } else {
                    result(null, token);
                }
            })
        }

    });
};

module.exports = User;