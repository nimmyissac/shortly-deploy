var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var mongoose = require('mongoose');
// var db = require('../mongoConfig');

var UserSchema = mongoose.Schema({
  username: { type: String, index: { unique: true} },
  password: { type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

User.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

console.log('^^^^^^^^^^^^^^^^^^^^^^^');

UserSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  console.log('#######################################');
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

module.exports = User;
