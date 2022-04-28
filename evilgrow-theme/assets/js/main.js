var $ = jQuery.noConflict();


$(window).on('load', function () {


});



$(document).ready(function($){
    const navIcon = $(".nav-icon a")
    navIcon.text(function (index, oldText) {
        return oldText.replace(/\s+/g, '');
    });
    // navIcon.hover(function(){
    //     navIcon.parent().toggleClass('fa-regular')
    //     navIcon.parent().toggleClass('fa-solid')
    // })
})



