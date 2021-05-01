const mysql = require('mysql');

const mySQLconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database : 'usersdb'    // create db thru mysql gui client -- CREATE DATABASE usersdb
});

/*Note: You should set a password first before connecting to mysql from this client tool */
/* Exec the following db queries in mysql GUI client 
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';   // new password is 'password'
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; // new password is 'password'
*/

mySQLconnection.connect((err) => {
  if (err) throw err;
  console.log('MySQL DB Connected!');
});

module.exports = mySQLconnection;

// Note: What you should not do is to open a connection every time you get a request. 
// It is slow to connect everytime, second the driver normally opens a pool of connections 
// for you so should not be a problem. There's no need to close the connection to mysql.

