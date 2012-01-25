(function() {
	$(document).ready(function() {
    $("#bottomLinkWrapper").click(function() {
      window.socket.emit('shamoon');
    });
  });
})();
