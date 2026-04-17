const mysql = require('mysql2');
require('dotenv').config()


const credentials = {
  host: process.env.DB_HOST || 'host',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'database'
}

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

module.exports = connection;