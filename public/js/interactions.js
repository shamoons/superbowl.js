(function() {
	$(document).ready(function() {
    $("#bottomLinkWrapper").click(function() {
      window.socket.emit('shamoon');
      window.socket.on('loadAuthenticationWindow', function(data) {
        $("body").append(data.html);
      });
    });

    $('canvas').click(function(e){
      window.socket.emit('click', { x: e.pageX, y: e.pageY });
    });
  });
})();
