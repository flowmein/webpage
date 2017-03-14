$(document).ready(function() {
  $(".navbar-brand").addClass("animated bounce")
});

/*$(".nav div li").on("click". function() {
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});*/

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

/*var menu = document.querySelector('.menu');
var anchors = menu.getElementsByTagName('li');

for (var i = 0; i < anchors.length; i += 1) {
     anchors[i].addEventListener('click', function() { 
       clickHandler(anchors[i])}, false)
}

function clickHandler(anchor) {
  var hasClass = anchor.getAttribute('class');
  if (hasClass !== 'active') {
    anchor.setAttribute('class', 'active');
  }
}*/
