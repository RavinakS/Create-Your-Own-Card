const bcrypt = require('bcrypt');

async function encrypt(password){
    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);
    return hashedPassword;
}

async function decrypt(loginPassword, dbPassword){
    let validate = bcrypt.compare(loginPassword, dbPassword);
    return validate;
}

module.exports = {encrypt, decrypt};