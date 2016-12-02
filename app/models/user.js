var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var mongoose = require('mongoose');
var db = require('../mongoConfig');

var User = mongoose.model('User', db.UserSchema);
module.exports = User;

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });
// var UseSchema = mongoose.Schema({
//    username : String,
//    password : String
// });
// var User = mongoose.model('User', UseSchema);
//module.exports = User;
