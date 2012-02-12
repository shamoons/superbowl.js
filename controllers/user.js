User = require('../models/userModel');

exports.create = function(params) {
  var u = new User;
  u.email = params.email;
  u.password = params.password;
  u.addedOn = Date.now;
  console.log('User\n' + u);
  u.save(function(err){
    console.log('error saving User');
    console.log(err);
  })
};


exports.authenticate = function(data, onSuccess, onFailure) {
  console.log('looking for users');
  User.findOne({'email': data.email}, function (err, doc) {
    console.log('   Result:');
    console.log(doc);
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
        //User.create({email: data.email, password: data.password});
        var u = new User({email: data.email, password: data.password});
          u.save(function(err){
            if (err) {
              console.log('error saving User:');
              console.log(err);
            } else {
              console.log('save successful');
            }
          });
      } 
    }
  }); 

};