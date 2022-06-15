const cTable = require('console.table');

const Business = require('./utils/Business');
const createDb = require('./utils/connection');

let db;
createDb('root', 'Andrispower32!')
.then(result => {
    db = result;
})
.then(async () => {
    console.table(await Business.getEmployees(db, true));
});
