$("#js-flip-1").bind("click", function () {
  $("#js-flip-1 .card").toggleClass("flipped");
});

/* 
$('#js-flip-2').bind('click', function() {
  $('#js-flip-2 .card').toggleClass('flipped');
});



$('#js-flip-3').bind('click', function() {
  $('#js-flip-3 .card').toggleClass('flipped');
});



$('#js-flip-4').bind('click mouseleave', function() {
  $('#js-flip-4 .card').toggleClass('flipped');
});


$('#js-flip-5').bind('click mouseleave', function() {
  $('#js-flip-5 .card').toggleClass('flipped');
});


$('#js-flip-6').bind('click mouseleave', function() {
  $('#js-flip-6 .card').toggleClass('flipped');
});

 */

//  scroll

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
