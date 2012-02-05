User = require('../models/userModel');

var createUser = function(params) {

}

exports.authenticate = function(data, onSuccess, onFailure) {

  User.find({'email': data.email}, function (err, docs) {
    if (docs.length === 1) {
      if (docs.pass === data.password) {
        onSuccess();        
      } else {
        onFailure("Wrong Password for User");
      }
    }
    else if (docs.length > 1) {
       onFailure("Multiple records found for User");
    } else {
        createUser({name: data.name});
    }
  }); 

};