const mysql = require('mysql2/promise');

async function create(user, pass) {
    return await mysql.createConnection({
        host: 'localhost',
        // Your MySQL username,
        user: `${user}`,
        // Your MySQL password
        password: `${pass}`,
        database: 'business'
    });
}

module.exports = create;