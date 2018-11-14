'use strict';

var songs = require('../models/model');

exports.list = function(req, res) {
    res.json(songs.songs);
};

exports.stream = function(req, res) {
    res.json({"status": 200, "message": "OK"});
}