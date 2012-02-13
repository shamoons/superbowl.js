User = require('../models/userModel');


exports.authenticate = function(data, onSuccess, onFailure) {
  User.findOne({'email': data.email}, function (err, doc) {
    if (err) {
      onFailure(err, {message: 'Error querying users.'});
    } else {
      if (doc != null ) {
        if (doc.passwordEquals(data.password)) {
          onSuccess('Login successful!', {message: 'Welcome back!'});        
        } else {
          onFailure('Wrong Password', {message: 'Incorrect Password.'});
        }
      } else {
        var u = new User({email: data.email, password: data.password});
          u.save(function(err){
            if (err) {
              onFailure(err, {message: 'Error saving user data.'});
            } else {
              onSuccess('Success: created new User', {message: 'Success! We just created a new account for you.'})
            }
          });
      } 
    }
  }); 
};