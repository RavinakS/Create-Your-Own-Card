const users_detail_tbl = require('../model/signUp');
const validations = require('./validations');

const createAccount = (req, res) =>{
    if(validations.passwordValidation(req.body.password) === 'valid'){
        if(validations.termAndConditions(req.body.T_and_C) === 'excepted'){
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
}

module.exports = createAccount;