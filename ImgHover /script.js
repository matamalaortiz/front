$(document).ready(function(){


// Show Images Hover Links and Mousemove

  $('.link').on('mousemove', function(evt) {
    if ($(window).width() > 640){ 
      var projectjex = evt.clientX-100;
      var projectjey = evt.clientY-322;
      $('.img').css({
        'top': projectjey+'px',
        'left': projectjex+'px',
        'position': 'fixed',
        'display': 'inline'
      });
    }
  }).on('mouseleave', function() {
    $('.img').css({
      'display': 'none'
    });
  });

  $(".prueba").hover(function(){
    $(".img").css("background-image", "none");
    $(".img").html("<img src='scan.png'>");
  });

  $(".otraImg").hover(function(){
    $(".img").css("background-image", "none");
    $(".img").html("<img src='gif.gif'>");
  });  

});



//credits www.niekdekker.com
/* FRONT END EXERCICES @matamalaortiz */
