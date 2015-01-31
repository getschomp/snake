my_canvas = document.getElementById('canvas')
context = my_canvas.getContext("2d");
context.beginPath()
context.moveTo(0, 30);
context.lineTo(600, 30);
context.stroke();

// create horizontal lines
for (i = 30; i < 600; i=i+30) {
  context.moveTo(0, i);
  context.lineTo(600, i);
  context.lineWidth = .5;
  context.strokeStyle = '#d9d9d9';
  context.stroke();
}

// create vertical lines
for (i = 30; i < 600; i=i+30) {
  context.moveTo(i, 0);
  context.lineTo(i, 600);
  context.lineWidth = .5;
  context.strokeStyle = '#d9d9d9';
  context.stroke();
}
