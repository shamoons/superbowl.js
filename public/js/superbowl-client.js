(function() {
    jQuery(function($) {
		$(document).ready(function() {
			console.log('loaded');
			
			$('#canvasWrapper')

      $('canvas').click(canvasClicked);
			
      function canvasClicked() {
        alert("clicked");
      }
		});
    });
})();
