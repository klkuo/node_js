// Import mysql module
var mysql = require('mysql');

// Set db configs
var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: 'default dbname'
});

// Connection start.
connection.connect();

// DB query.
connection.query('SELECT 1 + 1 AS solution',function(error, rows, fields) {
        // Check it whether any error.
        if (error) {
            throw error;
        }

        console.log(rows[0].solution);
});

// Connection close.
connection.end();
