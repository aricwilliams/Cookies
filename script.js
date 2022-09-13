$(document).ready(function() {
    $.fn.myFunction = function() { 
        $('.arrow-img').toggleClass('rotate');
        $('.arrow-img').toggleClass('rotate-reset');
        $('.recipie').toggleClass('recipie-show');
        }
    $(".arrow").click(function(){
        $.fn.myFunction();
    });
});