var path = require('path');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017' + __dirname + '/db');
mongoose.connect('mongodb://localhost/db');

var db = mongoose.connection;

module.exports = db;

