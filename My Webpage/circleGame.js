var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400); 
      frameRate(30);
      // Paste code from Khan Academy here:
      background(255,180,180);
      var btnb = {
          x: 120,
          y: 320,
          width: 150,
          height: 50
      };
      var eraseCircles = false

      var lastMouseX=-1;
      var lastMouseY=-1;


      draw= function() {
          if(mouseX !== lastMouseX || mouseY !== lastMouseY){
              fill(mouseX, mouseY, 0);
              ellipse(190,200,mouseX/1.2,mouseY/1.2);
              lastMouseX=mouseX
              lastMouseY=mouseY
          }
          if(eraseCircles == true){
              background(255,255,255);
              eraseCircles=false;     
              background(255,180,180);       
          } 
          drawButton(btnb);
      };





      var drawButton = function(btnb) {
          fill(186, 188, 194);
          rect(btnb.x, btnb.y, btnb.width, btnb.height, 5);
          fill(0, 0, 0);
          textSize(19);
          textAlign(LEFT, TOP);
          text("Remove circles ", btnb.x+10, btnb.y+btnb.height/4);
      };


      mouseClicked = function() {
          if (mouseX >= btnb.x && mouseX <= (btnb.x+btnb.width) &&
          mouseY >= btnb.y && mouseY <= (btnb.y+btnb.height))     {
            eraseCircles = true;
          }
};


drawButton(btnb);





}};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("circle_game"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 