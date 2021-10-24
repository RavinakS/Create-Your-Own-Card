const jwt = require('jsonwebtoken');
const users_detail_tbl = require('../../model/login');
const secretKey = process.env.secretKey;

async function create(req, res, next){
    
    let user_info = await users_detail_tbl.userInfoForToken(req.body.login_id);

    jwt.sign(user_info[0], secretKey, (err, token)=>{
        if(err){
            res.send(err);
            next();
        }else{
            req.token = token;
            next();
        }
    });
}

function authenticate(req, res, next){

    let token = req.headers.cookie.split('=')[0];

    jwt.verify(token, secretKey, (err, decodedUserDetails)=>{
        if(err){
            console.log(err);
            res.send("Unauthorized!!");
            next();
        }else{
            req.decodedUserDetails = decodedUserDetails;
            next();
        }
    })
}

module.exports = {create, authenticate};