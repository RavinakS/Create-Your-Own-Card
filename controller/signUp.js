const users_detail_tbl = require('../model/signUp');
const schema = require('./middlewares/schema_validation');
const passwordE = require('./middlewares/password');
const Joi = require('joi');

const createAccount = async (req, res) =>{

    if(req.userNotExist){
        
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
            user_details.password = req.hashPassword;

            users_detail_tbl.createAccount(user_details)
            .then((response)=>{
                res.send('Account is successfully created!!');
            })
            
            .catch((err)=>{
                res.send(err);
            })
        }

    }else{

        if(req.id === 'both'){
            res.send({"status": "Already Exist.", "message": "This email id and phone number have already used. try with different id or logging in."});
        }
        else if(req.id === 'email'){
            res.send({"status": "Already Exist.", "message": "One account is already created with this email, try with different email or logging in."});
        }else if(req.id === 'phoneNum'){
            res.send({"status": "Already Exist.", "message": "One account is already created with this phone number, try with different phone number or logging in."});
        }

    }
}

module.exports = createAccount;
