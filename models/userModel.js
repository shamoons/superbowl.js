var mongoose = require('mongoose');

var User = new Schema({
    username    : String
  , password    : String
  , addedOn     : Date
});