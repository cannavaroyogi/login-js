var dbConn = require('./../../config/db');

var User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

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
            result(null, res);
        }

    });
};

module.exports = User;