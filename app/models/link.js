// var db = require('../mongoConfig');
var mongoose = require('mongoose');
var crypto = require('crypto');

var LinkSchema = mongoose.Schema({
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

var Link = mongoose.model('Link', LinkSchema);

LinkSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});



module.exports = Link;

