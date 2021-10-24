const bcrypt = require('bcrypt');
const users_detail_tbl = require('../../model/login');

async function encrypt(req, res, next){

    let salt = await bcrypt.genSalt();
    bcrypt.hash(req.body.password, salt, (err, hashedPassword)=>{
        if(err){
            res.send("Password is required.")
            next()
        }else{
            req.hashPassword = hashedPassword;
            next();
        }
    });
}

async function checkingPassword(req, res, next){
    let dbPassword = await users_detail_tbl.getPassword(req.body.login_id); 
    let valid = await bcrypt.compare(req.body.password, dbPassword[0]["password"]);

    if(valid){
        req.passwordIsValid = valid;
        next()
    }else{
        res.send("Incorrect Password!")
        next()
    }
}

module.exports = {encrypt, checkingPassword};