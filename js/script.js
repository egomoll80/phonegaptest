$(document).ready(function(){
    
    $('.buttonpusher').click(function(e){
        alert("!!!");
        $('.hiddentext').stop().slideToggle(300);
        e.preventDefault();
    });
    
}); //end document ready


