const Joi = require('joi');

const schema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(15).required(),
    email: Joi.string().email().required(),
    phoneNum: Joi.string().length(10).pattern(/^[0-9]+$/).required()
})


module.exports = {passwordValidation, termAndConditions}