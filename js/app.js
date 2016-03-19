$(document).ready(function() {

//Make list items sortable:
	$( "ul.list-items" ).sortable({axis: "y"});
    $( "ul.list-items" ).disableSelection();

//Add items to the list:
	$('form').submit(function(e) {
		e.preventDefault();
			//alert('pressed enter for adding new item');
			$('ul.list-items').append('<li class="pending"><i class="fa fa-square-o"></i>'+$('input.new-item').val()+'</li>');
			$('input.new-item').val('');
	});

//Add toggling from pending to done:
	$('.list-items').on('click', 'i.fa', function (){
		$(this).toggleClass('fa-square-o fa-minus');
		$(this).parent().toggleClass('pending done');
	});







// Clears all items on list 
	$(document).on('click', '#clear-list',function() {
		//alert('clicked reset button');
		$('.list-container').empty();
		submissions = 0;
	});

// Clears checked items only
	$(document).on('click', '#clear-checked', function () {
		$('.done').slideUp();
	});









})