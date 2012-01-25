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
    		console.log(data);
      		socket.emit('my other event', { my: 'data' });
    	});
 	});
})();