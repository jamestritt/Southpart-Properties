$(function() {
    $('.top').on('click', function() {
	$parent_box = $(this).closest('.col-md-4');
	$parent_box.siblings().find('.bottom').slideUp();
	$parent_box.find('.bottom').slideToggle(900, 'swing');
    });  
    
    
    
var quotes = {
	tinman: "text",
	dorothy: "No place like home",
	witch: "I'll get you!"
  }

$('button').click(function(){
var character = $(this).data('character');
	var quote = quotes[character];
  $(this).replaceWith(quote);
});  
});


