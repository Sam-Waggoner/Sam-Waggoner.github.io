var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400); 
      frameRate(30);
      // Paste code from Khan Academy here:
      background(255,180,180);
      //variables
var gX = 0;
var gY = 360;
var bX = 360;
var bY = 360;
var rY = 0;
var rX = 360;
var wX = 0;
var wY = 200;
var blackY = 200;
var blackX =360;
var yellowX =0;
var yellowY =0;
draw= function() {
  //green
  var green = color(0, 255,106, 25);
  fill(green);
  rect(gX,gY,40,40);
  //blue
  var blue = color(0, 0, 247, 25);
  fill(blue);
  rect(bX,bY,40,40);
  //red
  var red = color(255, 0, 0, 25);
  fill(red);
  rect(rX,rY,40,40);
  //white
  var white = color(255,255, 255, 25);
  fill(white);
  rect(wX,wY,40,40);
  //black
  var black = color(0, 0,0, 25);
  fill(black);
  rect(blackX,blackY,40,40);
  //yellow
  var yellow = color(255, 255,0, 25);
  fill(yellow);
  rect(yellowX,yellowY,40,40);
  bX+=-2;
  bY+=-2;
  gX+=2;
  gY+=-2;
  rY+=2;
  rX+=-2;
  wX+=2;
  blackX+=-2;
  yellowX+=2;
  yellowY+=2;
};
var btnb = {
x: 120,
y: 320,
width: 150,
height: 50
};




var drawButton = function(btnb) {
fill(149, 255, 0);
rect(btnb.x, btnb.y, btnb.width, btnb.height, 5);
fill(0, 0, 0);
textSize(19);
textAlign(LEFT, TOP);
text("restart", btnb.x+50, btnb.y+btnb.height/4);
};


mouseClicked = function() {
if (mouseX >= btnb.x && mouseX <= (btnb.x+btnb.width) &&
  mouseY >= btnb.y && mouseY <= (btnb.y+btnb.height))     {
      background(255, 180, 180);
gX = 0;
gY = 360;
bX = 360;
bY = 360;
rY = 0;
rX = 360;
wX = 0;
wY = 200;
blackY = 200;
blackX =360;
yellowX =0;
yellowY =0;
drawButton(btnb);
}
};


drawButton(btnb);








}};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("colors_game"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 