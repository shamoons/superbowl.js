User = require('../models/userModel');


exports.authenticate = function(data, onSuccess, onFailure) {

  User.find({'email': data.email}, function (err, docs) {
    if (docs) {
      //test password

      onSuccess()
    } else {
      
      onFailure()
    }
    
    // docs is an array
  }); 

};