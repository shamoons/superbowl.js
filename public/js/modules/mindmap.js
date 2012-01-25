modules['mindmap'] = (function(exports,talk,sock) {

  var canvas     = $('#canvas')
  var mouse      = {x:0,y:0} // mouse position
  var canvasPos  = {x:0,y:0} // canvas position
  var clicked    = {x:0,y:0} // click position
  var scale      = 1

  var dimensions = {
    w: $('#canvas').width(),
    h: $('#canvas').height()
  }
	
  /* possible input modes:
        pan
    	  select
    	  drag 
    	  resize
    	  text
    	  image
    	  video

    only pan works
  */
  var mode = 'pan'

  // active modes
  var dragging	= 0
  var circle		= 0



  $('#canvas').bind('mousemove.status', function(e) {
    mouse.x = e.offsetX
    mouse.y = e.offsetY
    $('#mouse-stat .info').text( e.offsetX+' : '+e.offsetY )
  });


  // activates a tool
  function switchTool(tool) {
  	$('#mode-stat .info').text( tool.name )
    $('#canvas').bind('mousedown.tool', tool.down)
    $(document).bind('mousemove.tool', tool.move)
    $(document).bind('mouseup.tool', tool.up)
    $(document).keydown(tool.keydown)
  }



  // Panning Tool moves the view
  var panTool = {
    name: 'pan',
    canvas: $('#canvas'),
    // are we moving?
  	dragging: 0,
    // init position
  	ix: 0,
  	iy: 0,
    // position delta
    dx: 0,
    dy: 0,
    // final position
    fx: 0,
    fy: 0,
    // mousedown position
    mdx: 0,
    mdy: 0,
    // mousedown handler
    down: function (e) {
  	  panTool.dragging = 1
      panTool.mdx = e.offsetX
      panTool.mdy = e.offsetY
      panTool._triangulate()
      //console.log(panTool)
  	},
    _triangulate: function() {
      panTool.ix = parseInt( $('#canvas').css('left').replace('px','') )
      panTool.iy = parseInt( $('#canvas').css('top').replace('px','') )
    },
    // mousemove handler
    move: function(e) {
      var dx,dy,fx,fy;

      // NOTE: this method is very choppy, need to smooth things
      // should add CSS3 transitions
  	  if (panTool.dragging == 1) {
  	  	// find deltas
  		  dx = panTool.mdx - e.offsetX
        dy = panTool.mdy - e.offsetY
        $('#delta-stat .info').text( dx+' : '+dy )
        panTool.dx = dx
        panTool.dy = dy
        panTool._move(dx, dy)
      }
      //console.log(panTool)
    },
    // pan the view
    _move: function(dx,dy) {
      // calculate position of canvas div
      var fx = panTool.ix - dx
      var fy = panTool.iy - dy
      // don't go past the top left corner
      if (fx <= 0 || fy <= 0) {
        if (fx > 0) fx = 0
        if (fy > 0) fy = 0
        // don't go past the bottom right corner
        if (fx < -3000) fx = -3000
        if (fy < -3000) fy = -3000
        $('#canvas').css('left', fx)
        $('#canvas').css('top', fy)
        $('#canvas-stat .info').text( fx+' : '+fy )
        panTool.fx = fx
        panTool.fy = fy
      }
    },
    // handle keyboard events
    keydown: function(e) {
      // up
      if (e.keyCode == 38) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(0, 20)
      }
      // left
      else if (e.keyCode == 37) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(20, 0)
      }
      // right
      else if (e.keyCode == 39) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(-20, 0)
      }
      // down
      else if (e.keyCode == 40) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(0, -20)
      }
    },
    // mouseup handler
    up: function(e) {
  		panTool.dragging = 0
    }
  };




  // Text tool
  var textTool = {
    name: 'text',
    canvas: $('#canvas'),
    // are we writing?
    writing: 0,
    // init position (canvas)
    ix: 0,
    iy: 0,
    // mousedown position
    mdx: 0,
    mdy: 0,
    // mousedown handler
    down: function (e) {
      textTool.writing = 1
      textTool.mdx = e.offsetX
      textTool.mdy = e.offsetY
      textTool.ix = parseInt( $('#canvas').css('left').replace('px','') )
      textTool.iy = parseInt( $('#canvas').css('top').replace('px','') )
      //console.log(panTool)
    },
    // mousemove handler
    move: function (e) {
      
    },
    // handle keyboard events
    keydown: function(e) {
      // up
      if (e.keyCode == 38) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(0, 20)
      }
      // left
      else if (e.keyCode == 37) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(20, 0)
      }
      // right
      else if (e.keyCode == 39) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(-20, 0)
      }
      // down
      else if (e.keyCode == 40) {
        e.preventDefault()
        panTool._triangulate()
        panTool._move(0, -20)
      }
      // default
      else {
        // do nothing?
      }
    },
    // mouseup handler
    up: function (e) {
      panTool.dragging = 0
    }
  };




  switchTool(panTool)


});



