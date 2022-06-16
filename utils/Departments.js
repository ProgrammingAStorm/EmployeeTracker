module.exports = class Departments {
    static async getDepartments(db, params) {
        if(!params) {
            return;
        }

        return ( await db.execute('select * from departments;') )[0];
    }
}