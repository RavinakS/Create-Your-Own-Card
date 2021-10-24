const host = process.env.host;
const user = process.env.mysqlUser;
const password = process.env.mysqlUserPassword;


const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: host,
        user: user,
        password: password,
        database: 'infistack'
    }
});

module.exports = knex;