$(document).ready(function() {

    $('body').mousemove(function(event) {
        // var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
        // var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
        $('#top').css({
            "width": event.pageX - 200,
            "height": event.pageY 
        });
        $('#ortiz').css({
            "width": event.pageX,
            "height": $(window).height() - event.pageY - 500
        });

    });

});    