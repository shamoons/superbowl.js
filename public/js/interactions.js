(function() {
	$(document).ready(function() {
    $("#bottomLinkWrapper").click(function() {
      window.socket.emit('shamoon');
      window.socket.on('loadAuthenticationWindow', function(data) {
        $("body").append(data);
      });
    });
  });
})();
