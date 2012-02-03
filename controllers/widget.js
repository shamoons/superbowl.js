Widget = require('../models/widgetModel');

exports.create = function(req, res, next) {
  var w = new Widget;
  w.location.x = req.x;
  w.location.y = req.y;
  console.log(w);
};