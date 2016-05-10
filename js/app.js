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
    playHadouken();
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
    if (event.which == 88){
      $('.ryu-hide').hide();
      $('.ryu-cool').show();
  }
})
.keyup(function() {
  $('.ryu-hide').hide();
  $('.ryu-still').show();
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
