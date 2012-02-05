(function() {

  var superbowl = {};

  superbowl.resetView = function() {
    //TODO move viewport to origin
  }


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
    

    $('#pasteboard').click(function(e){
      createWidget(e.pageX, e.pageY);
      // window.socket.emit('click', { x: e.pageX, y: e.pageY });
    });
    
    $('#pasteboard').bind('mousemove', function(e) {
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


