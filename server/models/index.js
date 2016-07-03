var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM MESSAGES", function(err, res) {
        callback(res);
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      var message = req.body;
      var preMessage = {};
      
      console.log(message.message, message.username, req._startTime, message.roomname);

      var messageParams = [message.message, message.username, req._startTime, message.roomname];
      // run query to pull in chatroom ID and set to variable
        //insert the lobby if doesnt exist
      db.query("INSERT INTO messages (message, username, createdAt, chatroomID) VALUE \
                (?, ?, ?, (select id from chatroom where name = ?))", 
        messageParams, function(err, res) {
          if (err) {
            console.log('Post Error: ', err);
            callback(res);
          }
        });
    } // a function which can be used to insert a message into the database
  },

  roomname: {
    // Ditto as above.
    get: function () {},
    post: function () {
      var message = {username: 'ELLO', content: 'USERSPOPPET'};
      //console.log('con', con);
      db.query('INSERT INTO messages SET ?', message, function(err, res) {
        if (err) { throw err; }

        console.log('Last insert ID:', res.insertId, res);
      });
    }
  }
};

