module.exports = function(io) {
  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });

    socket.on('my other event', function (data) {
      console.log(data);
    });

    socket.on('shamoon', function (data) {
      console.log("HEREERERERERE");
      console.log(data);
    });

  });

}
