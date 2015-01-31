var cellWidth = 30;
var canvasWidth = 600;
var gridStroke = .5;

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

makeCanvas();
makeGrid();
