var static    = require('./controllers/static');
var location  = require('./controllers/location');

//var user      = require('./controllers/user');

module.exports = function(app) {
  app.get("/", static.index);
  app.get("/at/:hash", location.decode);
  app.get("/to/:hash", location.encode);
};

