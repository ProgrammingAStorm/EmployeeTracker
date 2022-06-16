module.exports = class Roles {
    static async getRoles(db, params) {
        if(!params) {
            return;
        }

        const sql = `
SELECT title AS Title, CONCAT('$', FORMAT(salary, 2)) AS Salary, name AS Department
FROM roles

JOIN departments ON roles.department_id = departments.id`;

        return ( await db.execute(sql) )[0];
    }
}