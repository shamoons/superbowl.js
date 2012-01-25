(function() {
	$(document).ready(function() {
		var canvas	= document.getElementById('canvas')
		var ctx		= canvas.getContext('2d')
		var mouse	= {x:0,y:0} // mouse position
		var origPos	= {x:0,y:0} // canvas position
		var origin	= {x:0,y:0} // click position
		var scale	= 1
		
		var mode		= 'dragging'
		var dragging	= 0
		var circle		= 0

    	window.socket = io.connect('http://localhost:3000');

		drawInit();
    	$('canvas').click(canvasClicked);
    	$('canvas').mousemove(canvasMoved);
    	$('canvas').mouseup(canvasUpped);

    	function canvasClicked(e) {
			$('#status').html(e.pageX +', '+ e.pageY);
			console.log(e.pageX +', '+ e.pageY);

			var ctx = this.getContext("2d");
		     //draw a circle
			if (mode == 'circle') {
				ctx.beginPath();
				ctx.arc(ix, iy, 10, 0, Math.PI*2, true); 
				ctx.closePath();
				ctx.fill();
			}
			else if (mode == 'dragging') {
				dragging = 1
				origin = { x:e.pageX , y:e.pageY }
				pos = $('#canvas').position()
				origPos = { x:pos.x , y:pos.y}
			}
		}
		
		function canvasMoved(e) {
			if (dragging && mode == 'dragging') {
				console.log('dragging');
				dx = origin.x - e.pageX
				dy = origin.y - e.pageY
				
				nx = origPos.x - dx
				ny = origPos.y - dy
				
				$('#canvas').offset({
					'left'	: nx,
					'top'	: ny
				});
			}
		}
		
		function canvasUpped(e) {
			dragging = 0
			
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