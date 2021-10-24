const cards = require('../model/cards');

//creating card for the user which is logged in
const postCard = (req, res)=>{

    let cardDetails = {
        "title": req.body.title,
        "body": req.body.body,
        "phoneNumber": req.decodedUserDetails.phoneNum,
        "email": req.decodedUserDetails.email
    }

    cards.newCard(cardDetails)
    .then((response)=>{
        res.send("Card is successfully created:)");
    })
    .catch((err)=>{
        res.send(err);
    })
}

// view all cards of the logged in user
const viewCards = (req, res) =>{

    cards.viewCards(req.decodedUserDetails.email)
    .then((allCards)=>{
        res.send(allCards);
    })
    .catch((err)=>{
        res.send(err);
    })

}

// can't edit others cards
const editCard = (req, res) =>{

    let updatedCard = {
        "title": req.body.title,
        "body": req.body.body,
        "phoneNumber": req.decodedUserDetails.phoneNum,
        "email": req.decodedUserDetails.email
    }

    cards.editCard(req.body.search_card_title, updatedCard)
    .then((response)=>{
        if(response){
            res.send("Updated the Card.");
        }
        res.send({
            "status": "Not Found", 
            "Message": "Provide an existing card title."
        })
    })
    .catch((err)=>{
        res.send("Please provide title of the card you want to edit.");
    })
}

// delete your own card
const deleteCard = (req, res) =>{

    cards.deleteCard(req.body.title)
    .then((response)=>{
        if(response===0){
            res.send({
                "status": "Not Found", 
                "Message": "Provide an existing card title."
            })
        }
        res.send("Card is successfully deleted.");
    })
    .catch((err)=>{
        res.send("Please provide title of the card you want to delete.");
    })
}

module.exports = {postCard, viewCards, editCard, deleteCard};