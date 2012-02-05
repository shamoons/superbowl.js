var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email       : String
  , password    : String
  , addedOn     : Date
});

exports.User =mongoose.model ('User', UserSchema)