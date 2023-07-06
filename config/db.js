'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host    : '127.0.0.1',
    user    : 'root',
    password: '',
    database: 'login_project'
});

dbConn.connect(function (err) {
   if (err) throw err;
   console.log("Database connected"); 
});

module.exports = dbConn;