const cTable = require('console.table');

const Business = require('./utils/Business');
const createDb = require('./utils/connection');

let db;
createDb('root', 'Andrispower32!')
.then(result => {
    db = result;
    console.log('\n\n');
})
.then(async () => {
    console.table('Employees', await Business.getEmployees(db));
})
.then(async () => {
    console.table('Departments', await Business.getDepartments(db));
})
.then(async () => {
    console.table('Roles', await Business.getRoles(db));
})
.then(async () => {
    /*console.table(await Business.addRole(db, {
        title: 'Title',
        salary: 1000000.00,
        dep: 1
    }))*/
});
