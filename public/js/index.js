$(document).ready(function() {
	$('.skill-summary li').click( function(){
		var skillName = $(this).text().replace(" ", "-").toLowerCase();

		$('article').each( function( index ){
			var skill = $(this).find('div.skills-used div').attr('skill');
			if ( skill == skillName ) {
				opacity($(this), 1);
				//TODO: make appropriate skill-bar taller
			} else {
				opacity($(this), 0.3);
			}
		});
	});
});

var opacity = function(obj, opacity) {
	if (opacity >= 0 && opacity <= 1) obj.css('opacity', opacity);
	else console.log('opacity not between 0 and 1');
};

