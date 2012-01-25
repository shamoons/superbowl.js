(function() {
	$(document).ready(function() {

    $('canvas').click(canvasClicked);
			
    function canvasClicked(e) {
      alert("clicked");
		  $('#status').html(e.pageX +', '+ e.pageY);
		  ix = e.pageX;
		  iy = e.pageY;
		  console.log(e.pageX +', '+ e.pageY);
    }

    var socket = io.connect('http://localhost:3000');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  });
		
})();
