$(document).ready(function(){
  var smoothLinks = $("a.smooth");
  smoothLinks.on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  });
});
