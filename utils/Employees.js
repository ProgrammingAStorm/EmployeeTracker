module.exports = class Employees {
    static async getEmployees(db, params) {
        if(!params) {
            return ( await db.execute('select * from employees;') )[0];;
        }

        return ( await db.execute('select * from employees;') )[0];
    }
}