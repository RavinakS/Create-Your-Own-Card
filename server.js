const express = require('express');
const app = express();
app.use(express.json());

const routes = require('./routes/allRoutes')
app.use('/', routes);
// app.get('/', (req, res)=>{
//     res.send("Hii Ravina!!");
// })

app.listen('3040', (req, res)=>{
    console.log("Server is on.");
})