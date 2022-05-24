const config          = require('./dbConfig'),
        sql           = require('mssql');

const getUsers = async() => {
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().query(`SELECT * from users`)
        console.log(users);
        return users;
    }

    catch(error) {
        console.log(error);
    }
}

const createUser = async(User) => {
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().query(`INSERT INTO Users (login, password, userLevel) VALUES 
        ('${User.Login}', '${User.Password}','${User.UserLevel}')
        `)
        
        return users;
    }

    catch(error) {
        console.log(error);
    }
}


module.exports = {
    createUser,
    getUsers

}