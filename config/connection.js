const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql-122313-0.cloudclusters.net',
    user: 'admin',
    password: 'AGrgohfY',
    port: '19486',
    database: 'Sorteos'
})

connection.connect((err) => {
    if (err) {
        console.log('Database Error: ' + err);
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;