(function() {
  var superbowl = {};

  superbowl.resetView = function() {
    $('#canvas').css('left', 0);
    $('#canvas').css('top', 0);
  }


	$(document).ready(function() {
    $("#bottomLinkWrapper").click(function() {
    });
    
    // menu bar
    $('#btn-reset-view').bind('click', function(e) {
      superbowl.resetView();
    });
    $('#login-button').bind('click', function(e) {
      $('#login-window').show();
    });
    $('#btn-login-submit').bind('click', function(e) {
      window.socket.emit('submit-login', {email: $('email-address').val(), password: $('password').val()});
      window.socket.on('login-success', function(data) {
        $("body").append(data.html);
      });
      window.socket.on('login-fail', function(data) {
        $("body").append(data.html);
      });
      $('#login-window').hide();
    });
    $('#btn-login-cancel').bind('click', function(e) {
      $('#login-window').hide();    
    });
    

    $('canvas').click(function(e){
      window.socket.emit('click', { x: e.pageX, y: e.pageY });
    });
  });
})();
