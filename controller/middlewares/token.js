const jwt = require('jsonwebtoken');

function create(user_info, secretKey){
    let token = jwt.sign(user_info, secretKey);
    return token;
}

function verify(req, res){
    let token = req.headers.cookie;
    return jwt.verify(token);
}

module.exports = {create, verify};