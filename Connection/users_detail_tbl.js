const db = require('./dbConnection');

db.schema.hasTable('users_detail').then((exist)=>{
    if(!exist){
        return db.schema.createTable('users_detail', (t)=>{
            t.string('profilePic_url').notNullable(),
            t.string('userName', 15).notNullable(),
            t.string('email', 30).notNullable().primary(),
            t.string('phoneNum', 12).unique().notNullable(),
            t.string('password').notNullable(),
            t.string('gender', 10).notNullable(),
            t.date('Dob').notNullable(),
            t.string('qualification', 50).notNullable(),
            t.string('T_and_C', 10).notNullable().defaultTo('true')
        })
    }
}).then((resolve)=>{
    console.log("Successfully Created!!");
}).catch((err)=>{
    console.log(err);
})