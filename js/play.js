initialize_game(){
  create_snake()
  create_prize()

}

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);
