module.exports = class Business {
    static async getEmployees(db) {
        const sql = `
            SELECT
                employee.id AS ID, CONCAT(employee.first_name, ' ', employee.last_name) AS Employee,
                roles.title AS Role, CONCAT('$', FORMAT(roles.salary, 2)) AS Salary,
                departments.name AS Department,
                IF(employee.manager_id IS NULL, 
                    'None',
                    (SELECT
                        CONCAT(first_name, ' ', last_name)
                        FROM employees
                        WHERE id = employee.manager_id
                    )
                ) AS Manager

            FROM employees AS employee

            JOIN roles ON employee.role_id = roles.id
            JOIN departments ON roles.department_id = departments.id
            JOIN employees AS manager ON employee.id = manager.id
            ORDER BY employee.id
        `;

        return ( await db.execute(sql) )[0];
    }

    static async getDepartments(db) {
        const sql = `
            SELECT id AS ID, name AS Name
            FROM departments
        `;

        return ( await db.execute(sql) )[0];
    }

    static async getRoles(db) {
        const sql = `
            SELECT title AS Title, CONCAT('$', FORMAT(salary, 2)) AS Salary, name AS Department
            FROM roles

            JOIN departments ON roles.department_id = departments.id
        `;

        return ( await db.execute(sql) )[0];
    }

    static async addEmployee(db, params) {
        const manager = params.manager        
        params = [ params.first, params.last, params.role ];

        if(manager) {
            params.push(manager);

            const sql = `
                INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`
            ;

            try {
                const response = ( await db.execute(sql, params) )[0];
                return [
                    {
                        'Affected Rows': response.affectedRows,
                        'Insert Id': response.insertId
                    }
                ];
            } catch (error) {
                return [
                    {
                        'Error': `${error.sqlMessage.trim()}\n\n${error.sql.trim()}`
                    }
                ];
            }
        } else {
            const sql = `
                INSERT INTO employees (first_name, last_name, role_id)
                VALUES (?, ?, ?)`
            ;

            try {
                const response = ( await db.execute(sql, params) )[0];
                return [
                    {
                        'Affected Rows': response.affectedRows,
                        'Insert Id': response.insertId
                    }
                ];
            } catch (error) {
                return [
                    {
                        'Error': `${error.sqlMessage.trim()}\n\n${error.sql.trim()}`
                    }
                ];
            }
        }


    }

    static async addDepartment(db, params) {
        const sql = `
            INSERT INTO departments (name)
            VALUES (?)`
        ;

        params = [ params.name ];

        try {
            const response = ( await db.execute(sql, params) )[0];
            return [
                {
                    'Affected Rows': response.affectedRows,
                    'Insert Id': response.insertId
                }
            ]
        } catch (error) {
            return [
                {
                    'Error': `${error.sqlMessage.trim()}\n\n${error.sql.trim()}`
                }
            ];
        }     
    }

    static async addRole(db, params) {
        const sql = `
            INSERT INTO roles (title, salary, department_id)
            VALUES (?, ?, ?)`
        ;

        params = [ params.title, params.salary, params.dep ];

        try {
            const response = ( await db.execute(sql, params) )[0];
            return [
                {
                    'Affected Rows': response.affectedRows,
                    'Insert Id': response.insertId
                }
            ];
        } catch (error) {
            return [
                {
                    'Error': `${error.sqlMessage.trim()}\n\n${error.sql.trim()}`
                }
            ];
        }        
    }

    static async updateEmployee(db, params) {
        const sql = `
            UPDATE employees 
            SET role_id = ?
            WHERE id = ?`
        ;

        params = [ params.role, params.id ];

        try {
            const response = ( await db.execute(sql, params) )[0];
            return [
                {
                    'Affected Rows': response.affectedRows,
                    'Insert Id': response.insertId
                }
            ];
        } catch (error) {
            return [
                {
                    'Error': `${error.sqlMessage.trim()}\n\n${error.sql.trim()}`
                }
            ];
        }
    }
}