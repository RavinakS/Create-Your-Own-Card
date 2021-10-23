const user = require('./middlewares/token');
const cards = require('../model/cards');
const { decode } = require('jsonwebtoken');

//creating card for the user which is logged in
const postCard = (req, res)=>{
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');
    
    if(decoded.email === req.body.email){
        let cardDetails = {
            "title": req.body.title,
            "body": req.body.body,
            "phoneNumber": decoded.phoneNum,
            "email": decoded.email
        }
    
        cards.newCard(cardDetails)
        .then((response)=>{
            res.send("Card is successfully created:)");
        })
        .catch((err)=>{
            res.send(err);
        })
    }else{
        res.send("Access Denied.")
    }

}

// view all cards of the logged in user
const viewCards = (req, res) =>{
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');

    if(decoded.email === req.body.email){
        cards.viewCards(decoded.email)
        .then((allCards)=>{
            res.send(allCards);
        })
        .catch((err)=>{
            res.send(err);
        })
    }else{
        res.send("Access Denied.");
    }
}

// can't edit others cards
const editCard = (req, res) =>{
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');
    
    if(decoded.email === req.body.email){
        let updatedCard = {
            "title": req.body.title,
            "body": req.body.body,
            "phoneNumber": decoded.phoneNum,
            "email": decoded.email
        }
    
        cards.editCard(req.body.search_card_title, updatedCard)
        .then((response)=>{
            console.log(response);
            // res.send(response);
            res.send("Updated the Card.");
        })
        .catch((err)=>{
            res.send(err);
        })
    }else{
        res.send("Access Denied."); 
    }
}

// delete your own card
const deleteCard = (req, res) =>{
    let token = req.headers.cookie.split('=')[0];
    let decoded = user.authenticate(token, 'infistack');

    console.log(decoded.email);
    console.log(req.body.email);
    console.log(req.body.title);
    if(decoded.email === req.body.email){
        cards.deleteCard(req.body.title)
        .then((response)=>{
            console.log(response);
            res.send(response)
            // res.send("Card is successfully deleted.");
        })
        .catch((err)=>{
            res.send(err);
        })
    }else{
        res.send("Access Denied.");
    }
}

module.exports = {postCard, viewCards, editCard, deleteCard};