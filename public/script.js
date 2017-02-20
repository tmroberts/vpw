//alert('I am working! !');
console.log('This is working');



'use strict';
if (this.ClickTimes === undefined) this.ClickTimes = {};

(function(context) {

  (function($) {
      $(document).ready(function(){
          $(window).scroll(function(){
              if ($(this).scrollTop() >= 0) {
                  $('nav').fadeIn(500);
              } else {
                  $('nav').fadeOut(500);
              }
          });
      });
  })(jQuery);


  function start() {

    //Call your code here
    console.log('starting!', context);
    var clickTimes = [];
    var clickLogUlDOM;

  }

  context.start = start;

})(window.ClickTimes);
