const express = require('express');
const app = express();
app.use(express.json());

const createAccount = require('./routes/signUp');
app.use('/', createAccount);

const signIn = require('./routes/login');
app.use('/', signIn);

app.listen('3040', (req, res)=>{
    console.log("Server is on.");
})