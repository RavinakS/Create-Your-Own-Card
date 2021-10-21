const users_detail_tbl = require('../model/signUp');
const validations = require('./schema_validation');

const createAccount = (req, res) =>{
    if(validations.passwordValidation(req.body.password) === 'valid'){
        if(validations.termAndConditions(req.body.T_and_C) === 'excepted'){
            let {profilePic_url, userName, email, phoneNum, password, gender, Dob, qualification, T_and_C} = req.body;
            let user_details = {
                "profilePic_url": profilePic_url,
                "userName": userName,
                "email": email,
                "phoneNum": phoneNum,
                "password": password,
                "gender": gender,
                "Dob": Dob,
                "qualification": qualification,
                "T_and_C": T_and_C
            }
            users_detail_tbl.createAccount(user_details)
            .then((response)=>{
                res.send('Account is successfully created!!');
            })
            .catch((err)=>{
                res.send(err);
            })
        }else if(validations.termAndConditions(req.body.T_and_C) === 'notExcepted'){
            res.send("You need to except the terms and conditions to create account.");
        }else{
            res.send(`please type "true" if you are agree with our terms and conditions or else type "false".`);
        }
    }else{
        res.send('Please provide a strong password!');
    }
}

module.exports = createAccount;