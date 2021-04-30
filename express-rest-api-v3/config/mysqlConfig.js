const mysql = require('mysql');

const mySQLconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database : 'accountsdb'    // create db thru mysql gui client -- CREATE DATABASE accountsdb
});

/*Note: You should set a password first before connecting to mysql from this client tool */
/* Exec the following db queries in mysql client 
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';   // new password is 'password'
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; // new password is 'password'
*/

mySQLconnection.connect((err) => {
  if (err) throw err;
  console.log('MySQL DB Connected!');
});

module.exports = mySQLconnection;