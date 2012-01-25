module.exports = function(io) {
  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
  
  io.sockets.on('click', function (socket) {
    console.log("CLICK");
    socket.emit('news', { hello: 'world' });
  });

}
