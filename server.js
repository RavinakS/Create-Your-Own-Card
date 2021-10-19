const express = require('express');
const app = express();
const db = require('./Connection/dbConnection');

app.get('/', (req, res)=>{
    res.send("Hii Ravina!!");
})

app.listen('3040', (req, res)=>{
    console.log("Server is on.");
})