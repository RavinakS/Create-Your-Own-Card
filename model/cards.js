const db = require('../Connection/dbConnection');

function newCard (card_data){
    return db('users_cards').insert(card_data);
}

module.exports = {newCard};