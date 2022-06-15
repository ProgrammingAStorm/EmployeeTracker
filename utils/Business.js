const Employees = require('./Employees');

module.exports = class Business {
    static async getEmployees(db, params) {
        return await Employees.getEmployees(db, params);
    }
}