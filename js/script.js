$( document ).ready(function() {
  
 $('body').on('click','.review-btn', function(e){
  $('#popup').fadeIn();
  var windowW = $(window).width();
  var windowH = $(window).height();
  var inner = $('#popup .inner');
  var innerW = inner.width();
  var innerH = inner.height();
  
  inner.css({
    left: (windowW /2) - (innerW / 2),
    top: (windowH /2) - (innerH / 2)
  })
  
 });
 $('body').on('click','.submitform', function(e){
  e.preventDefault();
  $('#popup').fadeOut();
 });
 

});

