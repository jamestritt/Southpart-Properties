var quotes = {
	tinman: "If i only had a brain",
	dorothy: "No place like home",
	witch: "I'll get you!"
  }

$('button').click(function(){
var character = $(this).data('character');
	var quote = quotes[character];
  $(this).replaceWith(quote);
})

$('#filters li').click(function(){
	var selected = $(this).text().toLowerCase();
	$(this).toggleClass('active').siblings().removeClass('active');
  
  $('#character-container li').each(function(index, item){
  $(item).removeClass('active');
  	if($(item).data('home') == selected){
    	$(item).addClass('active');
      }
  })
  
})

