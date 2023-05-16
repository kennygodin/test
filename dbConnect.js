const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GODwin855822',
  database: 'test',
});

module.exports = db;
