const jwt = require('jsonwebtoken');

function create(user_info, secretKey){
    let token = jwt.sign(user_info, secretKey);
    return token;
}

function authenticate(token, secretKey){
    // let token = req.headers.cookie;
    return jwt.verify(token, secretKey);
}

module.exports = {create, authenticate};