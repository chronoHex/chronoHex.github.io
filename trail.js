//function for scollature
$(function() {
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
        $('html').addClass('colochange')
        $('body').addClass('colochange')
     }
     if ($(this).scrollTop() < 50) {
        $('html').removeClass('colochange')
        $('body').removeClass('colochange')
     }
  });
});