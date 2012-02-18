(function() {

  var superbowl = {};

  superbowl.resetView = function() {
    //TODO move viewport to origin
  }

  superbowl.renderWidget = function (widgetData) {
        newPod = $('<div></div>', {class: 'element', style: 'left: '+ widgetData.location.x +'px; top: '+ widgetData.location.y +'px;'})
                  .appendTo('#pasteboard #inner')
                  .html('<p>' + widgetData.data.text + '</p>');
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
      window.socket.emit('submit-login', {email: $('#email-address').val(), password: $('#password').val()});
      window.socket.on('login-success', function(data) {
        console.log('login succeeded ');
        $('.login-btn').hide();
        $('.logout-btn').show();
        $('.logout-btn .menutext').text(data.username);
      });
      window.socket.on('login-fail', function(data) {
        $("body").append(data.html);
      });
      $('#login-window-overlay-mask').hide();
    });

    $('#logout-button').bind('click', function(e) {
      window.socket.emit('logout');
      console.log('logged out');
      $('.logout-btn').hide();
      $('.logout-btn .menutext').empty();
      $('.login-btn').show();
  });

    $('#btn-login-cancel').bind('click', function(e) {
      $('#login-window-overlay-mask').hide();    
    });
    $('#login-window-overlay-mask').bind('click', function(e) {
      $('#login-window-overlay-mask').hide();    
    });
    

    $('#pasteboard').click(function(e){
      createWidget(e.pageX, e.pageY);
    });
    
    $('#pasteboard').bind('mousemove', function(e) {
      $('#mouse-stat .info').text( e.offsetX + ' : ' + e.offsetY )
    });


    //TODO get client screen size from jQuery;
    //userPosition is the center of the screen
    window.socket.emit('getWidgets', {userPosition: {x: 0, y:0}, userScreenSize: {x: 1280, y:740}}); 

    window.socket.on('widget-update', function(data){
      console.log('received widget update');
      data.forEach(function(widget) {
        superbowl.renderWidget(widget);
      });
      console.log(data);
    });
    
  });
  
  function createWidget(x, y) {
    var text = prompt("What text do you want to put?");
    if(text && text != '') {
      superbowl.renderWidget({location: {x: x, y:y}, data: {text: text}});
      window.socket.emit('createWidget', {x: x, y: y, data: {text: text}});
    }
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


