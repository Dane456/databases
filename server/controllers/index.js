var models = require('../models');
var mysql = require('mysql');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //get username and conten
      console.log('in controllers func');
      models.messages.post();
      // res.send("INSERT INTO messages (content, username) VALUES ('22AsUHH DUDE', 'HOH')");
      //console.log('request body', req);

      // var username = 
      // var content = 

      // app.post('/classes/messages', function(req, res) {
      //   console.log('post request recieved');
      // });

      // var message = { username: username, content: content };
      // con.query('INSERT INTO messages SET ?' + message, function(err, res) {
      //   if (err) throw err;

      //   console.log('Last insert ID:', res.insertId, res);
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

