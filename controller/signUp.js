const users_detail_tbl = require('../model/signUp');
const test = require('./schema_validation');
const Joi = require('joi');

const createAccount = (req, res) =>{
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

    let validate = test.test1.validate(req.body)
    if(validate.error){
        res.send(error);
        // res.status(400).send(validation.error.details[0].message);
    }else{
        users_detail_tbl.createAccount(user_details)
        .then((response)=>{
            res.send('Account is successfully created!!');
        })
        .catch((err)=>{
            res.send(err);
        })
    }
    // Joi.validate(user_details, schema, (err, result)=>{
    //     if(err){
    //         // res.status(400).send(err.details[0].message)
    //         res.send(err);
    //     }else{
    //         users_detail_tbl.createAccount(user_details)
    //         .then((response)=>{
    //             res.send("Account is successfully created!!");
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    //     }
    // })
}

module.exports = createAccount;
