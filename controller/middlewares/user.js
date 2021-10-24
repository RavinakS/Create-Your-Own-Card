const allUsersData = require('../../model/login').allUsersData;

const isExist = (req, res, next) =>{

    allUsersData()
    .then((data)=>{
        var user = 0;
        for(user; user<data.length; user++){
            if(data[user].email === req.body.login_id || data[user].phoneNum === req.body.login_id){
                req.isUserExist = true;
                return next();
            }
        }
        if(user===data.length){
            res.send({"status": "Not found", "message": "Create Account and then do sign-in."})
        }
    })
    .catch((err)=>{
        console.log(err);
        next()
    })
}

module.exports = {isExist};