var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username    : String
  , password    : String
  , addedOn     : Date
});

exports.User = mongoose.model 'User', UserSchema