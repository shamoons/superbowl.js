var mongoose = require('mongoose');

var LocationSchema = require('./schemas/locationSchema');

var EntitySchema = new mongoose.Schema({
	addedOn     : Date
  , data   	 	: Schema.Types.Mixed 
  , location	: { LocationSchema, index: true }
  , user_id   : String
});

Entity.pre('save', function (next) {
  this.markModified('data');
  next();
});

exports.Entity = mongoose.model 'Entity', EntitySchema