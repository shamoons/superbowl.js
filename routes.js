var static    = require('./controllers/static');
//var user      = require('./controllers/user');

module.exports = function(app) {
  app.get("/", static.index);
};
