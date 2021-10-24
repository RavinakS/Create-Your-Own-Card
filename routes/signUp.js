const express = require('express');
const router = express.Router();
const password = require('../controller/middlewares/password');
const userNotExist = require('../controller/middlewares/isUserExist').signUp;

const createAccount = require('../controller/signUp');
router.post('/create-account', [userNotExist, password.encrypt], createAccount);

module.exports = router;