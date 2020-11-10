const { response } = require('..');
const pool = require('./../../databasePool');

class AccountTable{
    static storeAccout({usernameHash, passwordHash}){
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO account("usernameHash", "passwordHash") VALUES($1, $2)',
                [usernameHash, passwordHash],
                (error, response) => {
                    if(error) return reject(error);

                    resolve();
                }
            );
        });
    }
}
module.exports = AccountTable;