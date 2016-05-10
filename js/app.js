var xDown = false;
$(document).ready(function() {
  $('.ryu').mouseenter(function(){
    $('.ryu-hide').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-hide').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    playMusic('#hadouken-sound');
    $('.ryu-hide').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1025px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '525px');
      }
    );
  })
  .mouseup(function(){
    $('.ryu-hide').hide();
    $('.ryu-ready').show();
  });
})
.keydown(function(event) {
    if (xDown)
      return;
    if (event.which == 88){
      xDown = true;
      playMusic('#numb');
      $('.ryu-hide').hide();
      $('.ryu-cool').show();
  }
})
.keyup(function() {
  xDown = false;
  stopMusic('#numb');
  $('.ryu-hide').hide();
  $('.ryu-still').show();
});
function playMusic (music) {
  $(music)[0].volume = 0.5;
  $(music)[0].load();
  $(music)[0].play();
}
function stopMusic (music) {
  $(music)[0].pause();
}
