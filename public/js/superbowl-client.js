(function() {
	$(document).ready(function() {
	  // Load pasteboard
	  (function() {
      var screenWidth = screen.width;
      var screenHeight = screen.height;
      $('#pasteboard').css('top', screenHeight / 2);
      $('#pasteboard').css('left', screenWidth / 2);
      $('#pasteboard').css('width', screenWidth * 3);
  	  $('#pasteboard').css('height', screenHeight * 3);

      $('#inner').css('width', screenWidth * 4);
      $('#inner').css('height', screenHeight * 4);
      // $('#inner').css('left', screenWidth / 2 - screenWidth);
      // $('#inner').css('top', screenHeight / 2 - screenHeight);
  	  
      $('#pasteboard').kinetic();
	  })();
	  
		//var socket = io.connect();
    window.socket = io.connect('http://localhost:3000');
    var app = {
        socket: socket,
        talk: {},
        mindmap: {}
    };


    // initialize application modules
    modules['talk'](app.talk, socket);
    modules['mindmap'](app.mindmap, app.talk, socket);

    
    // Wire socket messages
    socket.on('connect', function() {
        // init
    });
	
  	socket.on('news', function (data) {
    	socket.emit('my other event', { my: 'data' });
  	});
  	
  	
  	// Slide up the header bar
  	setTimeout(function(){
      slideHeaderUp();
  	}, 1000);
  	
  	$('#slideDownTab').click(function(){
  	  if($('#header').is(':visible')) {
  	    slideHeaderUp(); 
  	  } else {
  	    slideHeaderDown(); 
  	  }
  	});  	
 	});
 	
  function slideHeaderDown() {
    $('#header').slideDown();
    $('#slideDownTab').animate({
      top: 0
    });
  }
  
  function slideHeaderUp() {
	  $('#header').slideUp();
    $('#slideDownTab').animate({
      top: -42
    });
  }

})();