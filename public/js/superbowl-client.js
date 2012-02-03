(function() {
	$(document).ready(function() {
		var socket = io.connect();
    	//window.socket = io.connect('http://localhost:3000');
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