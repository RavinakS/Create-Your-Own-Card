const login = async (req, res)=>{
    if(req.isUserExist){
        if(req.passwordIsValid){
            res.cookie(req.token);
            res.send("Logged in Successfully!!");
        }
    }
}

module.exports = login;