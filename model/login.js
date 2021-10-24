const db = require('../Connection/dbConnection');

const getPassword = (login_id) =>{
    return db.select('password').from('users_detail').where('email', login_id).orWhere('phoneNum', login_id);
}

const userInfoForToken = (login_id) =>{
    return db.select('email', 'phoneNum').from('users_detail').where('email', login_id).orWhere('phoneNum', login_id);
}

const allUsersData = () =>{
    return db.select('email', 'phoneNum').from('users_detail');
}


module.exports = {getPassword, userInfoForToken, allUsersData};