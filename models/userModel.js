var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email       : {	type: String
	    		  , validate: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'not a valid email address']}
  , password    : String
  , createdOn   : { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', UserSchema)