'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host    : '',
    user    : '',
    password: '',
    database: 'komik_project'
});

dbConn.connect(function (err) {
   if (err) throw err;
   console.log("Database connected"); 
});

module.exports = dbConn;
