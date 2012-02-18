Widget = require('../models/widgetModel');

exports.create = function(req, res, next) {
  var w = new Widget;
  w.location.x = req.x;
  w.location.y = req.y;
  w.data = req.data;
  //TODO get username from session
  w.username = ''; //anonymous
  w.save(function(err){
  	if (err) {
  		console.log('Error saving user: ' + err);
  	}
  })
};

exports.findInRect = Widget.findInRect;