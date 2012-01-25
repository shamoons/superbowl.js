(function() {
	$(document).ready(function() {
		console.log('loaded');

			var wrapper = $("#canvasWrapper").click(canvasClicked);
			
      function canvasClicked(e) {
        console.log('clicked');
        var ctx = this.childNodes[0].getContext("2d");
        //draw a circle
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
      }

    var socket = io.connect('http://localhost:3000');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  });
		
})();
