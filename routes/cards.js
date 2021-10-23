const express = require('express');
const router = express.Router();
const {postCard, viewCards, editCard, deleteCard} = require('../controller/cards');

router.post('/create-card', postCard);

router.get('/view-cards', viewCards);

router.put('/edit-post', editCard);

router.delete('/delete-card', deleteCard);


module.exports = router;