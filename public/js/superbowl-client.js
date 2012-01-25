(function() {
	$(document).ready(function() {
    window.socket = io.connect('http://localhost:3000');

		drawInit();
    $('canvas').click(canvasClicked);
			
    function canvasClicked(e) {
		  $('#status').html(e.pageX +', '+ e.pageY);
		  console.log(e.pageX +', '+ e.pageY);
		  ix = e.pageX;
		  iy = e.pageY;
		  
		  var ctx = this.getContext("2d");
      //draw a circle
      ctx.beginPath();
      ctx.arc(ix, iy, 10, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fill();

      window.socket.emit('click', { x: e.pageX, y: e.pageY });
    }

    window.socket.on('news', function (data) {
    	console.log(data);
      window.socket.emit('my other event', { my: 'data' });
    });
  });
		
	function drawInit() {
		var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.fillStyle="#FF0000";
		ctx.fillRect(10,10,15,7);
	}

})();
