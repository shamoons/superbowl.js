var fs = require('fs');
var jade = require('jade');

var static    = require('./controllers/static');
var user      = require('./controllers/user');
var widget    = require('./controllers/widget');

module.exports = function(io) {
  io.sockets.on('connection', function (socket) {

    socket.on('createWidget', function (data) {
      console.log(data);
      widget.create(data);
    });
    socket.on("submit-login", function (data){
      user.authenticate(data, 
        function(res, data){
          console.log('authentication succeeded: ' + res);
          socket.emit('login-success', data)}, 
        function(res, data){
          console.log('authentication failed: ' + res);
          socket.emit('login-fail', data);
        });
    });

    socket.on('getWidgets', function(data){
      console.log('received getWidgets request');
      Widget.findInRect(data, function(err, docs){
        if (err) {
          console.log('error finding widgets. ' + err);
        } else {
          if (docs && docs.length > 0) {
            socket.emit('widget-update', docs);
          }
        }
      });
    });
    
  });

}
