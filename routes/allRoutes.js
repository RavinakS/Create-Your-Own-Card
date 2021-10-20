const express = require('express');
const router = express.Router();

const createAccount = require('../controller/signUp');
router.post('/create-account', createAccount);

module.exports = router;