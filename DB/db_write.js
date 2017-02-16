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

// Date wait be inserted.
var data = {
    rows: 'columns',
    strings: 'integers'
};

connection.query('INSERT INTO `table` SET ?', data, function(error) {
        if (error) {
            console.log('寫入資料失敗！');
            throw error;
        }
});

// Connection close.
connection.end();
