const express = require('express');
const router = express.Router();

const createAccount = require('../controller/signUp');
router.post('/create-account', createAccount);

const login = require('../controller/logIn');
router.get('/login', login);

module.exports = router;