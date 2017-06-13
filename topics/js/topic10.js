window.onload = function(){
  var canvas = document.getElementById('Canvas');
  var ctx = canvas.getContext('2d');
  //Draw a rectangle -> ctx.fillRect(x, y, width, height);
  ctx.fillRect(0, 0, 100, 100);
  //StrokeRectangle
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(0, 255, 0)";
  ctx.strokeRect(100, 100, 100, 100);
  
  //Lines with fill!
  ctx.beginPath();
  ctx.moveTo(101, 49);
  ctx.lineTo(151, 249);
  ctx.lineTo(151, 249);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.fill();
  //Lines With closePath - Mountains
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(20,450);
  ctx.lineTo(80,400);
  ctx.lineTo(100,420);
  ctx.lineTo(180,350);
  ctx.lineTo(250,400);
  ctx.lineTo(280,450);
  ctx.closePath(320, 250);
  ctx.closePath(350, 450);
  ctx.stroke();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();


}
