const users_detail_tbl = require('../model/signUp');
const schema = require('./schema_validation');
const passwordE = require('./password');
const Joi = require('joi');

const createAccount = async (req, res) =>{
    //error handling
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

    let {error, result} = schema.validations.validate(user_details)
    if(error){
        res.send(error.details[0].message);
    }else{
        let hashPassword = await passwordE.encrypt(password);
        user_details.password = hashPassword;
        users_detail_tbl.createAccount(user_details)
        .then((response)=>{
            res.send('Account is successfully created!!');
        })
        .catch((err)=>{
            res.send(err);
        })
    }
}

module.exports = createAccount;
