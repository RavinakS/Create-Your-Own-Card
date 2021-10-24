const express = require('express');
const router = express.Router();
const {postCard, viewCards, editCard, deleteCard} = require('../controller/cards');
const authenticate = require('../controller/middlewares/token').authenticate;

router.post('/create-card', authenticate, postCard);

router.get('/view-cards', authenticate, viewCards);

router.put('/edit-post', authenticate, editCard);

router.delete('/delete-card', authenticate, deleteCard);


module.exports = router;