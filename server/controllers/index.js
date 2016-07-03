var models = require('../models');
var mysql = require('mysql');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) { console.log('Get Error: ', err); }
        res.json(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //get username and conten
      console.log('in controllers func req: ', req._startTime);
      models.messages.post(req, function(err, results) {
        results.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post();
    }
  }
};

