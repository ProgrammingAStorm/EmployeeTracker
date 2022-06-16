module.exports = class Departments {
    static async getDepartments(db, params) {
        if(!params) {
            return;
        }

        const sql = `
SELECT id AS ID, name AS Name
FROM departments`

        return ( await db.execute(sql) )[0];
    }
}