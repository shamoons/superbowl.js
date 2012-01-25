var mongoose = require('mongoose');
var LocationSchema = require('./schemas/locationSchema');

/*
	Remember the Schema.Types.Mixed property definition requires that code similar 
	to the following be used whenever saving this entity:  

	entity.data = { x: [3, 4, { y: "changed" }] };
	entity.markModified('data');
	entity.save(); // entity will now get saved
*/

var EntitySchema = new Schema({
	addedOn     : Date
  , data   	 	: Schema.Types.Mixed 
  , location	: { LocationSchema, index: true }
  , username    : String
});

exports.Entity = mongoose.model 'Entity', EntitySchema