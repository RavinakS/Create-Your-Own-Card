const knex = require('knex');
const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: "ravina@123",
        database: 'infistack'
    }
});

module.exports = db;