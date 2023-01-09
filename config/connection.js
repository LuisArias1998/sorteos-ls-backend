const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql9.freesqldatabase.com',
    user: 'sql9589176',
    password: 'EKMfULMYWE',
    port: '3306',
    database: 'sql9589176'
})

connection.connect((err) => {
    if (err) {
        console.log('Database Error: ' + err);
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;