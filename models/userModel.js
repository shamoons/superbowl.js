var mongoose = require('mongoose');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    email       : { type: String
	    		  , validate: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'not a valid email address']
	    		  , index: { unique: true }
	    		  , set: toLower}
	    		  //TODO validate that email address is not empty

  , password    : { type: String
  				  }

  , salt		: { type: String
	  			  , default: generateSalt}

  , createdOn   : { type: Date
	  			  , default: Date.now }
});


function toLower (str) {
  return str.toLowerCase();
}

function encrypt (plaintext, salt) {
	var hash = crypto.createHash('sha512');
	hash.update(plaintext + salt);
	return hash.digest('hex');
}

function generateSalt() {
	return Math.round((new Date().valueOf() * Math.random())) + '';
}

UserSchema.path('password').set(function (plaintext) {
	return encrypt(plaintext, this.salt);
});

UserSchema.method('passwordEquals', function(test_password) {
	return encrypt(test_password, this.salt) === this.password;
});




module.exports = mongoose.model('User', UserSchema)