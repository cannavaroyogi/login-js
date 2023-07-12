const User = require('../models/user.model');

exports.findUser = function (req, res) {
    const userData = new User(req.body);
    User.findUser(userData, function (err, token) {
        if (err) res.send(err);
        // if (user !== null) {
        //     res.status(200).json({error:false,message:'Login Successfull'});
        // } else {
        //     res.status(404).json({error:true,message:"user data not found"});
        // }
        if (token) {
            res.status(200).json({error:false,meassage:'Login Successfull',token:token});
        } else {
            res.status(404).json({error:true,message:"user data not found"});
        }
    });
};