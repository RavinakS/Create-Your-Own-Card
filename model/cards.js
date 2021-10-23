const db = require('../Connection/dbConnection');
const table = 'users_cards';

function newCard (card_data){
    return db(table).insert(card_data);
}

function viewCards(user_id){
    return db(table).select('*').where('email', user_id);
}

function editCard(search_title, updatedCard){
    return db(table).where('title', search_title).update(updatedCard);
}

function deleteCard(card_title){
    return db(table).where('title', card_title).del();
}

module.exports = {newCard, viewCards, editCard, deleteCard};