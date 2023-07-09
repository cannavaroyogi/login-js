'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host    : '192.168.0.104',
    user    : 'yogi',
    password: 'yogi090890',
    database: 'login_project'
});

dbConn.connect(function (err) {
   if (err) throw err;
   console.log("Database connected"); 
});

module.exports = dbConn;