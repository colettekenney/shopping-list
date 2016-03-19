$(document).ready(function() {

//Adding items to the list:
	$('form').submit(function(e) {
		e.preventDefault();
			//alert('pressed enter for adding new item');
			$('ul.list-items').append('<li class="pending"><i class="fa fa-check"></i>'+$('input.new-item').val()+'</li>');
			$('input.new-item').val('');
	});

//Adding 
	$(document).on('hover', '.fa-check', function(e){
		console.log(e.type);
		if(e.type=='mouseenter'){
		$(this).removeClass('fa-check').addClass('fa-minus');
		}
		else {
		$(this).removeClass('fa-minus').addClass('fa-check');
		}	
	});







// Clears all items on list 
$(document).on('click', '#startover',function() {
	alert('clicked reset button');
	//$('.list-app').empty();
	//submissions = 0;
});






})