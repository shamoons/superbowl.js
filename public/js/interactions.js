(function() {
/*
  var superbowl = {};

  superbowl.resetView = function() {
    $('#canvas').css('left', 0);
    $('#canvas').css('top', 0);
  }

*/
	$(document).ready(function() {
    disableSelection(document.body);
    $("#bottomLinkWrapper").click(function() {
    });
    
    // menu bar
    $('#btn-reset-view').bind('click', function(e) {
      superbowl.resetView();
    });
    $('#login-button').bind('click', function(e) {
      $('#login-window-overlay-mask').show();
    });
    $('#btn-login-submit').bind('click', function(e) {
      window.socket.emit('submit-login', {email: $('email-address').val(), password: $('password').val()});
      window.socket.on('login-success', function(data) {
        $("body").append(data.html);
      });
      window.socket.on('login-fail', function(data) {
        $("body").append(data.html);
      });
      $('#login-window-overlay-mask').hide();
    });
    $('#btn-login-cancel').bind('click', function(e) {
      $('#login-window-overlay-mask').hide();    
    });
    $('#login-window-overlay-mask').bind('click', function(e) {
      $('#login-window-overlay-mask').hide();    
    });
    

    $('#canvas').click(function(e){
      createWidget(e.pageX, e.pageY);
      // window.socket.emit('click', { x: e.pageX, y: e.pageY });
    });
    
    // Debugging info, should probably be moved to separate file.
    
    $('#canvas').bind('mousemove', function(e) {
      $('#mouse-stat .info').text( e.offsetX + ' : ' + e.offsetY )
    });
    
    
  });
  
  function createWidget(x, y) {
    var text = prompt("What text do you want to put?");
    window.socket.emit('createWidget', {x: x, y: y, text: text});
  }
})();

function disableSelection(target){
if (typeof target.onselectstart!="undefined")             // IE method
  target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") // Firefox method
  target.style.MozUserSelect="none"
else                                                     // Everyone else
  target.onmousedown=function(){return false}
target.style.cursor = "default"
}


/*

$('#canvas').bind('mousemove.status', function(e) {
  mouse.x = e.offsetX
  mouse.y = e.offsetY
  $('#mouse-stat .info').text( e.offsetX+' : '+e.offsetY )
});



*/

