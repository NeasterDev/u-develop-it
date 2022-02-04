const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: 'N@sus&Oreo1',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;