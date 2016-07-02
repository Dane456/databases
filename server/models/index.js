var db = require('../db');
var con = require('../db/index.js');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      var message = {username: 'ELLO', content: 'POPPET'};
      //console.log('con', con);
      con.con.query('INSERT INTO messages SET ?', message, function(err, res) {
        if (err) throw err;

        console.log('Last insert ID:', res.insertId, res);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

