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
.then(init);

function init() {
    //Promts the user to pick an action.
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
                "Update an employee's role.",                   
                'Quit.'
            ]
        }
    ]).then(async answers => {
        //Whatever action the picked is then executed.
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

            //The next four actions all prompt the user for the data required for that specificy query, and then passes that data to the appropriate functon to query the database.

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

            case('Add a department.'):
                console.table(
                    await Business.addDepartment(
                        db,

                        await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Please enter the name of the new department: ',
                                validate: input => {
                                    if(!input || typeof input !== 'string') {
                                        return false;
                                    }
                                    return true;
                                }
                            }
                        ])
                    )
                );
            break;

            case('Add a role.'):
                console.table(
                    await Business.addRole(
                        db,

                        await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'title',
                                message: 'Please enter the title: ',
                                validate: input => {
                                    if(!input || typeof input !== 'string') {
                                        return false;
                                    }
                                    return true;
                                }
                            },
                            {
                                type: 'number',
                                name: 'salary',
                                message: 'Please enter the salary: ',
                                validate: input => {
                                    if(!input || typeof input !== 'number') {
                                        return false;
                                    }
                                    return true;
                                }
                            },
                            {
                                type: 'number',
                                name: 'dep',
                                message: 'Please enter the department ID: ',
                                validate: input => {
                                    if(!input || typeof input !== 'number') {
                                        return false;
                                    }
                                    return true;
                                }
                            }, 
                        ])
                    )
                );
            break;

            case("Update an employee's role."):
                console.table(
                    await Business.updateEmployee(
                        db,

                        await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'id',
                                message: 'Please enter the id of the employee: ',
                                validate: input => {
                                    if(!input || typeof input !== 'number') {
                                        return false;
                                    }
                                    return true;
                                }
                            }, 
                            {
                                type: 'number',
                                name: 'role',
                                message: 'Please enter the id of the new role: ',
                                validate: input => {
                                    if(!input || typeof input !== 'number') {
                                        return false;
                                    }
                                    return true;
                                }
                            } 
                        ])
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