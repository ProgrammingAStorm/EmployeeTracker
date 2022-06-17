const cTable = require('console.table');
const inquirer = require('inquirer');

const Business = require('./utils/Business');
const createDb = require('./utils/connection');

let db;

createDb('root', 'Andrispower32!')
.then(result => {
    db = result;
    console.log('\n\n');
})
.then(init)
// .then(async () => {
//     /*console.table(await Business.addRole(db, {
//         title: 'Title',
//         salary: 1000000.00,
//         dep: 1
//     }))*/
// })
// .then(async () => {
//     /*console.table(await Business.addEmployee(db, {
//         first: 'Cleo',
//         last: 'Patra',
//         role: 1,
//         manager: 1
//     }))*/
// })
// .then(async () => {
//     /*console.table(await Business.addDepartment(db, {
//         name: null
//     }))*/
// })
// .then(async () => {
//     /*console.table(await Business.updateEmployee(db, {
//         id: 7,
//         role: 1
//     }))*/
// });

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Please pick an action.',
            choices: [
                'Show all employees.',
                'Show all departments.',
                'Show all roles.',
                'Add an employee.',                
                'Add a department.',                
                'Add a role.',                    
                'Quit.'
            ]
        }
    ]).then(async answers => {
        switch(answers.choice) {
            case('Show all employees.'):
                console.table('Employees', await Business.getEmployees(db));
            break;

            case('Show all departments.'):
                console.table('Departments', await Business.getDepartments(db));
            break;

            case('Show all roles.'):
                console.table('Roles', await Business.getRoles(db));
            break;

            case('Add an employee.'):
                console.table(
                    await Business.addEmployee(
                        db,

                        await inquirer.prompt(
                            [
                                {
                                    type: 'input',
                                    name: 'first',
                                    message: 'Please enter the first name: ',
                                    validate: input => {
                                        if(!input || typeof input !== 'string') {
                                            return false;
                                        }
                                        return true;
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'last',
                                    message: 'Please enter the last name: ',
                                    validate: input => {
                                        if(!input || typeof input !== 'string') {
                                            return false;
                                        }
                                        return true;
                                    }
                                },
                                {
                                    type: 'number',
                                    name: 'role',
                                    message: 'Please enter the role ID: ',
                                    validate: input => {
                                        if(!input || typeof input !== 'number') {
                                            return false;
                                        }
                                        return true;
                                    }
                                },
                                {
                                    type: 'number',
                                    name: 'manager',
                                    message: 'Please enter the manager ID: (Leave empty for none.) ',
                                    default: null
                                },
                            ]
                        )
                    )
                );
            break;

            case('Quit.'):
                db.close();
            return;
        }

        return init();
    })
}