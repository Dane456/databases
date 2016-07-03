var mysql = require('mysql');
var request = require('request');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  user: 'root',
  password: 'daneil',
  database: 'chat'
});


con.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


module.exports = con;



