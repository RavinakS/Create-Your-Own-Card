const express = require('express');
const router = express.Router();

const postCard = require('../controller/cards');
router.post('/create-card', postCard);

module.exports = router;