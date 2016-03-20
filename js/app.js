$(document).ready(function() {

//Make list items sortable
	$( "ul.list-items" ).sortable({axis: "y"});
    $( "ul.list-items" ).disableSelection();

//Add items to the list
	$('form').submit(function(e) {
		if($.trim($('input.new-item').val()) === "") {
			e.preventDefault();
			alert('Please Enter an Item');}

		else {
			e.preventDefault();
			$('ul.list-items').append('<li class="pending"><i class="fa fa-square-o"></i>'+$('input.new-item').val()+'</li>');
			$('input.new-item').val('');}

	});

//Add toggling from pending to done
	$('.list-items').on('click', 'i.fa', function (){
		$(this).toggleClass('fa-square-o fa-minus');
		$(this).parent().toggleClass('pending done');
	});

// Erase all items on list 
	$(document).on('click', '#clear-list', function() {
		//alert('clicked reset button');
		$('.pending, .done').slideUp();
	});

// Erase checked items only
	$(document).on('click', '#clear-checked', function () {
		$('.done').slideUp();
	});

})