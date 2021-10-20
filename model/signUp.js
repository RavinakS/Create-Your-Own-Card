const db = require('../Connection/dbConnection');

const createAccount = (data)=>{
    return db('users_detail').insert(data);
}

module.exports = {createAccount};
