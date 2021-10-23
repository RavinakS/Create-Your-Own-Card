const user = require('./middlewares/token');

const postCard = (req, res)=>{
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');
    
    let cardDetails = {
        "title": req.body.title,
        "body": req.body.body,
        "phoneNumber": decoded.phoneNum,
        "email": decoded.email
    }

    

}

module.exports = postCard;