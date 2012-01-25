
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');

config = require('./config/index.js');

var app = module.exports = express.createServer();
var io = require('socket.io').listen(app)

dsn = "mongodb://";
if(config.database.username !== "" && config.database.password !== "")
  dsn += config.database.username + ":" + config.database.password + "@";
dsn += config.database.host + ":" + config.database.port + "/" + config.database.database;
mongoose.connect(dsn, function(err) { if(err) throw err; })

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes
var routes = require('./routes')(app)
var socketIO = require('/socket.io')(io);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
