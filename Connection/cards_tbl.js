const db = require('./dbConnection');

db.schema.hasTable('users_cards').then((exist)=>{
    
    if(!exist){
        return db.schema.createTable('users_cards', (t)=>{
            t.increments('card_id').primary(),
            t.string('title', 60).notNullable(),
            t.string('body').notNullable(),
            t.string('phoneNumber').notNullable(),
            t.string('email', 30).notNullable(),
            t.foreign('email').references('users_detail.email')
        })
    }

}).then((result)=>{
    console.log("successfully created!!");
}).catch((err)=>{
    console.log(err);
})