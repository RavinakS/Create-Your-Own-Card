const users_detail_tbl = require('../model/signUp');
const password = require('./validations');

const createAccount = (req, res) =>{
    if(password.passwordValidation(req.body.password) === 'valid'){
        // {profilePic_url, userName, email, phoneNum, password, gender, Dob, qualification, T_and_C} = req.body;
        users_detail_tbl.createAccount(req.body)
        .then((response)=>{
            res.send('Account is successfully created!!');
        })
        .catch((err)=>{
            res.send(err);
        })
    }
}

module.exports = createAccount;