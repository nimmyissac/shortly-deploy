var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017' + __dirname + '/db');

var Schema = mongoose.Schema;

var urls = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: { type: Number, default: 0 }
},
  {
    timestamps: true
  }
);

var users = new Schema({
  username: String,
  password: String,
});

module.exports.LinkSchema = urls;
module.exports.UserSchema = users;

