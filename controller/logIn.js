const users_detail_tbl = require('../model/login');
const password = require('./middlewares/password');
const token = require('./middlewares/token');

const login = async (req, res)=>{
    let dbPassword = await users_detail_tbl.login(req.body.login_id);
    let passwordIsValid = await password.decrypt(req.body.password, dbPassword[0]["password"]);

    if(passwordIsValid){
        let user_info = await users_detail_tbl.data(req.body.login_id);
        let tokenIsCreated = token.create(user_info[0], 'infistack');

        if(tokenIsCreated){
            res.cookie(tokenIsCreated);
            res.send("Logged in Successfully!!");
        }

    }else{
        res.send("Wrong Password!!");
    }
}

module.exports = login;