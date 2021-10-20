const users_detail_tbl = require('../model/signUp');
const password = require('./validations');

const createAccount = (req, res) =>{
    if(password.passwordValidation(req.password) === 'valid'){

    }
}
