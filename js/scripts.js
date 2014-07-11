$(document).ready(function() {
	//toggle size and controls on click

	//auto hides controls
	$('#tweet-controls').hide();

	$(".tweet-compose").on('focus',function() {
		// toggle the class active
		$(this).toggleClass('active');
		//toggle the controls to show
		$('#tweet-controls').toggle();
	});


	$(".tweet-reply").on('focus',function() {
		// toggle the class active
		$(this).toggleClass('active');
		//toggle the controls to show
	});


	maxCharacters = 140;

	$('#count').text(maxCharacters);

	$('textarea').bind('keyup keydown', function() {
    var count = $('#count');
    var characters = $(this).val().length;
    
    if (characters > maxCharacters - 11) {
        count.addClass('over');
    } else {
        count.removeClass('over');
    }
    
    count.text(maxCharacters - characters);


});















});