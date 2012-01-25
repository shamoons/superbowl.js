modules['mindmap'] = (function(exports,talk,sock) {

	var canvas	= document.getElementById('canvas')

	var mouse      = {x:0,y:0} // mouse position
	var canvasPos  = {x:0,y:0} // canvas position
	var origin     = {x:0,y:0} // click position
	var scale      = 1
	
	/* possible input modes
	      drag
	      point
		  move
		  resize
		  text
		  image
		  video             */
	var mode		= 'dragging'

	// active modes
	var dragging	= 0
	var circle		= 0




	$('#canvas').bind('mousemove', function(e) {
		mouse.x = e.offsetX
		mouse.y = e.offsetY
		$('#mouse-stat .info').text( e.offsetX+' : '+e.offsetY )
	});

	



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

});