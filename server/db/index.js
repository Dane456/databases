var mysql = require('mysql');
var router = require('../routes.js');
var controller = require('../controllers');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.con = mysql.createConnection({
  user: 'root',
  password: 'daneil',
  database: 'chat'
});


exports.con.connect(function(err) {
  if(err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// console.log('exports con', con);

// exports.con.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

// exports.con = con;
