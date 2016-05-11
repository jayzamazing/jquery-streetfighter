var xDown = false;
$(document).ready(function() {
  playMusic('#points');
  $('.ryu').mouseenter(function(){
    $('.ryu-hide').hide();
    $('.ryu-ready, .hulk-ryu-ready').show();
  })
  .mousedown(function(){
    playMusic('#hadouken-sound');
    $('.ryu-hide').hide();
    $('.ryu-throwing, .hulk-ryu-ready').show();
    $('.hadouken').finish().show().animate(
      {'left': '1025px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '525px');
      }
    );
  });
}).keydown(function(event) {
  console.log("hi");
    if (xDown)
      return;
    if (event.which == 88){
      stopMusic('#points');
      xDown = true;
      playMusic('#numb');
      $('.ryu-hide').hide();
      $('.ryu-cool, .hulk-ryu-cool').show();
  }
}).keyup(function() {
  xDown = false;
  stopMusic('#numb');
  $('.ryu-hide').hide();
  $('.ryu-ready, .hulk-ryu-ready').show();
});
$('.hulk-ryu').mouseenter(function(){
  $('.ryu-hide').hide();
  $('.ryu-ready, .hulk-ryu-ready').show();
}).mousedown(function(){
  playMusic('#hadouken-sound');
  $('.ryu-hide').hide();
  $('.ryu-ready, .hulk-ryu-throwing').show();
  $('.hulk-hadouken').finish().show().animate(
    {'left': '1025px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '525px');
    }
  );
});
$('.ryu, .hulk-ryu').mouseup(function(){
  $('.ryu-hide').hide();
  $('.ryu-ready, .hulk-ryu-ready').show();
}).mouseleave(function(){
  $('.ryu-hide').hide();
  $('.ryu-still, .hulk-ryu-still').show();
});
function playMusic (music) {
  $(music)[0].volume = 0.5;
  $(music)[0].load();
  $(music)[0].play();
}
function stopMusic (music) {
  $(music)[0].pause();
}
