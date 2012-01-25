(function() {
	$(document).ready(function() {
		var canvas	= document.getElementById('canvas');
		var ctx		= canvas.getContext('2d');
		var mouse	= {x:0,y:0} // mouse position
		var origPos	= {x:0,y:0} // canvas position
		var origin	= {x:0,y:0} // click position
		var scale	= 1;

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
	
	
	function drawClicked(canvas, x, y){
	  	canvas.beginPath();
    	canvas.arc(x, y, 10, 0, Math.PI*2, true); 
    	canvas.closePath();
    	canvas.fill();
	}

})();
