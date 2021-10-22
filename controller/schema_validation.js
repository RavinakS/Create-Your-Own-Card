const Joi = require('joi');

const validations = Joi.object({
    profilePic_url:Joi.string(),
    userName: Joi.string().alphanum().min(3).max(15).required(),
    email: Joi.string().email().required(),
    phoneNum: Joi.string().length(10).pattern(/^\d+$/).required(),
    password: Joi.string().min(4).max(10).required(),
    gender: Joi.string(),
    Dob: Joi.date().raw(),
    qualification: Joi.string(),
    T_and_C: Joi.bool()
})

module.exports = {validations}

// function termAndConditions(t_and_c){
//     if(t_and_c === true){
//         return 'excepted';
//     }else if(t_and_c === false){
//         return "notExcepted";
//     }else{
//         return "invalid";
//     }
// }