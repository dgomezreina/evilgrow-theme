var $ = jQuery.noConflict();


$(window).on('load', function () {


});



$(document).ready(function($){
    const navIcon = $(".nav-icon a")
    navIcon.text(function (index, oldText) {
        return oldText.replace(/\s+/g, '');
    });
    navIcon.hover(function(){
        $(this).parent().toggleClass('fa-regular')
        $(this).parent().toggleClass('fa-solid')
    })
})



