const users_detail_tbl = require('../model/login');

const login = (req, res)=>{
    let user_info = req.body;
    obj_keys = Object.keys(user_info);
    user_id = obj_keys[0]
    users_detail_tbl.login(user_info[user_id])
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
}

module.exports = login;