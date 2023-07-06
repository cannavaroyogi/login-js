const User = require('../models/user.model');

exports.findUser = function (req, res) {
    const userData = new User(req.body);
    User.findUser(userData, function (err, user) {
        if (err) res.send(err);
        if (user !== null) {
            //res.json(user);
            // res.redirect('/landing');
            res.status(200).json({error:false,data:user});
        } else {
            res.status(404).json({error:true,message:"user data not found"});
        }
    });
};