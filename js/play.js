var snakeSpeed = .06
var gameOver = false
var cellWidth = 30;
var canvasWidth = 600;
var gridStroke = .5;
var x_position = 0
var y_position = 0

function init() {
  makeCanvas();
  makeGrid();
  drawSquare(30, 30, "#ff259d");
//  createSnake();
//  createPrize();
}

function drawSquare(x_position, y_postion, color){
  /* width and height to be fixed.*/
  context.strokeStyle = color;
  context.fillStyle = color;
  context.fillRect(x_position(cellWidth), y_postion(cellWidth), 30, 30);
}

function makeCanvas(){
  my_canvas = document.getElementById('canvas')
  context = my_canvas.getContext("2d");
}

function makeGrid(){
  context.beginPath();

  // create horizontal lines
  for (i = cellWidth; i < canvasWidth; i= i + cellWidth) {
    context.moveTo(0, i);
    context.lineTo(canvasWidth, i);
    context.lineWidth = gridStroke;
    context.strokeStyle = '#d9d9d9';
    context.stroke();
  }

  // create vertical lines
  for (i = cellWidth; i < canvasWidth; i= i + cellWidth) {
    context.moveTo(i, 0);
    context.lineTo(i, canvasWidth);
    context.lineWidth = gridStroke;
    context.strokeStyle = '#d9d9d9';
    context.stroke();
  }
}

function moveRight{
  // needs to delete head and add tail to snake 

}

function drawPrize(){}

// call draw square and listen for position if block hits prize
init();
