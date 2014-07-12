$(document).ready(function() {
	$('.tweet-actions').hide();

	$('.tweet').mouseenter(function() {
		$('.tweet-actions').show();
	}).mouseleave(function() {
		$('.tweet-actions').hide();
	});

	
	$('#tweet-controls').hide();

	$(".tweet-compose").on('focus',function() {
		$(this).addClass('active');
		$('#tweet-controls').show();
	});

	if(maxCharacters === 140)  {
		$(".tweet-compose").on('blur',function() {
			$(this).removeClass('active');
		});
	}



	$(".tweet-reply").on('focus',function() {
		// toggle the class active
		$(this).addClass('active');
		//toggle the controls to show
	});

	$(".tweet-reply").on('blur',function() {
		// toggle the class active
		$(this).removeClass('active');
		//toggle the controls to show
	});


	var maxCharacters = 140;

	$('#count').text(maxCharacters);

	$('textarea').bind('keyup keydown', function() {
    var count = $('#count');
    var characters = $(this).val().length;
    
    if(characters > maxCharacters - 11) {
        count.addClass('over');
    } else {
        count.removeClass('over');
    }

    if(characters > maxCharacters) {
    	$('.button').addClass('disabled');
    } else {
    	$('.button').removeClass('disabled');
    }
    
    count.text(maxCharacters - characters);
});

	$('#tweet-submit').click(function() {
		var newTweet = $('#toggle').val();
		console.log(newTweet);
		$('#myTweet').prepend(newTweet);
	});

	$('#tweet-submit').click(function() {
		$('.tweet-compose').value = '';
	})
















});