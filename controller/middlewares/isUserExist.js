const allUsersData = require('../../model/login').allUsersData;

const signUp = (req, res, next) =>{

    allUsersData()
    .then((data)=>{

        var user = 0;
        for(user; user<data.length; user++){

            if(data[user].email === req.body.email && data[user].phoneNum === req.body.phoneNum){
                req.id = 'both';
                return next();
            }else if(data[user].email === req.body.email){
                req.id = 'email';
                return next();

            }else if(data[user].phoneNum === req.body.phoneNum){
                req.id = 'phoneNum';
                return next();
            }
        } 
        if(user===data.length){
            req.userNotExist = true;
            next();
        }
    })
}

const login = (req, res, next) =>{

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

module.exports = {signUp, login};