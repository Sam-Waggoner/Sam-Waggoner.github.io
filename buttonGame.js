var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400); 
      frameRate(30);
      // Paste code from Khan Academy here:
      background(255,180,180);  
      var eye = 50;
      draw= function() {
          //face
          fill(247, 255, 0);
          ellipse(200,200,200,200);
          //eyes
          fill(0, 0, 0);
          ellipse(170,170,eye,eye);
          ellipse(240,170,eye,eye);
          //mouth
          fill(255, 0, 0);
          ellipse(200,240,90,90);
          //text
          fill(0,0,0);
          textSize(40);
          text("MY EYES!",110,60,200,200);
      };
      var btnb = {
          x: 120,
          y: 320,
          width: 150,
          height: 50
      };

      
      
      var drawButton = function(btnb) {
          fill(0, 234, 255);
          rect(btnb.x, btnb.y, btnb.width, btnb.height, 5);
          fill(0, 0, 0);
          textSize(19);
          textAlign(LEFT, TOP);
          text("Bigger eyes", btnb.x+20, btnb.y+btnb.height/4);
      };
      
      
      mouseClicked = function() {
          if (mouseX >= btnb.x && mouseX <= (btnb.x+btnb.width) &&
              mouseY >= btnb.y && mouseY <= (btnb.y+btnb.height))     {
             eye=eye+5;   
          }
      };
      
      
      drawButton(btnb);







  }};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("button_game"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 