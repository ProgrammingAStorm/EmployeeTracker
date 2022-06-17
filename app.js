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
})
.then(async () => {
    /*console.table(await Business.addEmployee(db, {
        first: 'Cleo',
        last: 'Patra',
        role: 1,
        manager: 1
    }))*/
})
.then(async () => {
    /*console.table(await Business.addDepartment(db, {
        name: null
    }))*/
})
.then(async () => {
    /*console.table(await Business.updateEmployee(db, {
        id: 7,
        role: 1
    }))*/
});