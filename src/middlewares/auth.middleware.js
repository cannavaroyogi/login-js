const jwt = require('jsonwebtoken');
const secretKey = 'mySuperSecret';

exports.verifyToken = function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({error:true, meassage: 'Unauthorized'});        
    }

    jwt.verify(token, secretKey, function (err, decoded) {
        if (err) {
            return res.status(401).json({error: true, meassage: 'Invalid token'});
        }

        req.userId = decoded.id;
        next()
    })
}