const express = require('express');
const router = express.Router();
const {postCard, viewCards, editCard, deleteCard} = require('../controller/cards');

async function userIsAuthenticated(req, res, next){
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');

    let dbPassword = await users_detail_tbl.password(req.body.email);
    let passwordIsValid = await password.decrypt(req.body.password, dbPassword[0]["password"]);

    if(decoded.email === req.body.email && passwordIsValid){
        req = true;
        next();
    }else{
        req = false;
        next()
    }
}



router.post('/create-card', postCard);

router.get('/view-cards', viewCards);

router.put('/edit-post', editCard);

router.delete('/delete-card', deleteCard);


module.exports = router;