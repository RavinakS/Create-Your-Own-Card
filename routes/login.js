const express = require('express');
const router = express.Router();
const checkingPassword = require('../controller/middlewares/password').checkingPassword;
const createToken = require('../controller/middlewares/token').create;
const isUserExist = require('../controller/middlewares/user').isExist

const login = require('../controller/logIn');
router.get('/login', [isUserExist, checkingPassword, createToken], login);

module.exports = router;
