const Employees = require('./Employees');
const Departments = require('./Departments');
const Roles = require('./Roles');

module.exports = class Business {
    static async getEmployees(db, params) {
        return await Employees.getEmployees(db, params);
    }

    static async getDepartments(db, params) {
        return await Departments.getDepartments(db, params)
    }

    static async getRoles(db, params) {
        return await Roles.getRoles(db, params)
    }
}