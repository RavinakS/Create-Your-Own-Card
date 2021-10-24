const db = require('../Connection/dbConnection');

const password = (login_id) =>{
    return db.select('password').from('users_detail').where('email', login_id).orWhere('phoneNum', login_id);
}

const data = (login_id) =>{
    return db.select('email', 'phoneNum').from('users_detail').where('email', login_id).orWhere('phoneNum', login_id);
}

module.exports = {password, data};