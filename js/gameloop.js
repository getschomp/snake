/* var mainloop = function() {
  updateGame();
  drawGame();
};

var animFrame = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame    ||
window.oRequestAnimationFrame      ||
window.msRequestAnimationFrame     ||
null ;

if ( animFrame !== null ) {
  var canvas = $('canvas').get(0);

  if ( $.browser.mozilla ) {
    var recursiveAnim = function() {
      mainloop();
      animFrame();
    };

    // setup for multiple calls
    window.addEventListener("MozBeforePaint", recursiveAnim, false);

    // start the mainloop
    animFrame();
  } else {
    var recursiveAnim = function() {
      mainloop();
      animFrame( recursiveAnim, canvas );
    };

    // start the mainloop
    animFrame( recursiveAnim, canvas );
  }
} else {
  var ONE_FRAME_TIME = 1000.0 / 60.0 ;
  setInterval( mainloop, ONE_FRAME_TIME );
} */
