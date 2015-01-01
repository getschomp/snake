function drawSquare(x_position, y_postion, color){
  /* width and height to be fixed.*/
  context.strokeStyle = color;
  context.fillStyle = color;
  context.fillRect(x_position, y_postion, 30, 30);
}

drawSquare(30, 30, "#ff259d");


function drawPrize(){}

// call draw square and listen for position if block hits prize
