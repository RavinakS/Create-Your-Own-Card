const jwt = require('jsonwebtoken');

function createToken(user_info, secretKey){
    let token = jwt.sign(user_info, secretKey);
    return token;
}

function verifyToken(req, res){
    let token = req.headers.cookie;
}

module.exports = {createToken, verifyToken};