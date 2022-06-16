module.exports = class Business {
    static async getEmployees(db, params) {
        if(!params) {
            return ( await db.execute('select * from employees;') )[0];
        }

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

    static async getDepartments(db, params) {
        if(!params) {
            return;
        }

        const sql = `
            SELECT id AS ID, name AS Name
            FROM departments
        `;

        return ( await db.execute(sql) )[0];
    }

    static async getRoles(db, params) {
        if(!params) {
            return;
        }

        const sql = `
            SELECT title AS Title, CONCAT('$', FORMAT(salary, 2)) AS Salary, name AS Department
            FROM roles

            JOIN departments ON roles.department_id = departments.id
        `;

        return ( await db.execute(sql) )[0];
    }
}