$(function() {

    $("p").hide();
    $(".btn1").click(function(){
        $("p").slideToggle(900, 'swing');
    });
    
        $(".btn2").click(function(){
        $("p").slideDown();
    });
    
        $(".btn3").click(function(){
        $("p").slideDown();
    });  
});
