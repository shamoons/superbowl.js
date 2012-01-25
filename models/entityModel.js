var mongoose = require('mongoose');

var LocationSchema = new Schema({
	x: Number
	, y: Number
});

/*
	Remember the Schema.Types.Mixed property definition requires that code similar 
	to the following be used whenever saving this entity:  

	entity.data = { x: [3, 4, { y: "changed" }] };
	entity.markModified('data');
	entity.save(); // entity will now get saved
*/

var Entity = new Schema({
	addedOn     : Date
  , data   	 	: Schema.Types.Mixed 
  , location	: LocationSchema
  , username    : String
});