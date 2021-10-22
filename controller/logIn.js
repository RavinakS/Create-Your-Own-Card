const users_detail_tbl = require('../model/login');
const password = require('./password');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    let dbPassword = await users_detail_tbl.login(req.body.login_id);
    let passwordIsValid = await password.decrypt(req.body.password, dbPassword[0]["password"]);
    if(passwordIsValid){
        jwt.sign({id: req.body.login_id}, 'infistack', (err, token)=>{
            res.cookie('token', token);
            res.send("Logged in Successfully!!");
        })
    }else{
        res.send("Wrong Password!!");
    }
}

module.exports = login;