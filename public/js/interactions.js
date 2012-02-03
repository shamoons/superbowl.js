(function() {
	$(document).ready(function() {
   disableSelection(document.body);
    $("#bottomLinkWrapper").click(function() {
      window.socket.emit('shamoon');
      window.socket.on('loadAuthenticationWindow', function(data) {
        $("body").append(data.html);
      });
    });

    $('#canvas').click(function(e){
      createWidget(e.pageX, e.pageY);
      // window.socket.emit('click', { x: e.pageX, y: e.pageY });
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