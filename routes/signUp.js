const express = require('express');
const router = express.Router();
const password = require('../controller/middlewares/password');

const createAccount = require('../controller/signUp');
router.post('/create-account', password.encrypt, createAccount);

module.exports = router;