(function() {
	$(document).ready(function() {
      // $('#canvasWrapper')

      $('canvas').click(canvasClicked);
			
      function canvasClicked() {
        alert("clicked");
      }

    var socket = io.connect('http://localhost:3000');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  });
		
})();
