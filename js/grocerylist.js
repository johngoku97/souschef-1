$(document).ready(function () {

	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event)
	{
		event.preventDefault();
		var item = $('#input').val();
		if(item)
		{
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#input').val("");
		}

	});

	$(document).on('change', '.checkbox', function() {
		if($(this).attr('checked')) {
			$(this).removeAttr('checked');
		}

		else {
			$(this).attr('checked', 'checked');
		}
		$(this).parent().toggleClass('completed');
		localStorage.setItem('listItems', $('#list-items').html());
	});

	$(document).on('click', '.remove', function() {
		$(this).parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});

});
