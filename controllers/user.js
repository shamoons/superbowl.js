User = require('../models/userModel');

exports.authenticate = function(data, onSuccess, onFailure) {
  console.log('looking for users');
  User.findOne({'email': data.email}, function (err, doc) {
    if (err) {
      console.log ('error: ');
      console.log(err);
    } else {
      if (doc != null ) {
        if (doc.password === data.password) {
          onSuccess('Login successful!');        
        } else {
          onFailure('Wrong Password');
        }
      } else {
        console.log('no user found for email "' + data.email + '", creating new one');
        var u = new User({email: data.email, password: data.password});
          u.save(function(err){
            if (err) {
              onFailure(err);
            } else {
              console.log('save successful');
            }
          });
      } 
    }
  }); 

};