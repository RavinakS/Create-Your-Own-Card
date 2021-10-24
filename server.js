const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

const createAccount = require('./routes/signUp');
app.use('/', createAccount);

const signIn = require('./routes/login');
app.use('/', signIn);

const makeCard = require('./routes/cards');
app.use('/', makeCard);

app.listen('3040', (req, res)=>{
    console.log("Server is on.");
})