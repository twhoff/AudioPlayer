'use strict';
module.exports = function(app) {
  var songs = require('../controllers/controller');

  // todoList Routes
  app.route('/songs')
    .get(songs.list);


  app.route('/song/:songId')
    .get(songs.stream);
};
