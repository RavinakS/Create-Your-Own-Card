const express = require('express');
const router = express.Router();

const login = require('../controller/logIn');
router.get('/login', login);

module.exports = router;