module.exports = class Roles {
    static async getRoles(db, params) {
        if(!params) {
            return;
        }

        return ( await db.execute('select * from roles;') )[0];
    }
}