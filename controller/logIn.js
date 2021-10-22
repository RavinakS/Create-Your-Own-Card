const users_detail_tbl = require('../model/login');
const password = require('./password');

const login = async (req, res)=>{
    let dbPassword = await users_detail_tbl.login(req.body.login_id);
    let validate = await password.decrypt(req.body.password, dbPassword[0]["password"]);
    if(validate === true){
        res.send("Logged in Successfully!!");
    }else{
        res.send("Wrong Password!!");
    }
}

module.exports = login;