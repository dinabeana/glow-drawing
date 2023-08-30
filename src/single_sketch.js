import '../css/style.css';

import {sketch} from 'p5js-wrapper';

const w = 800;
const h = w;
let c = 100;
let button;

sketch.setup = function(){
 // createCanvas (800, 600);
    createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 100);
    frameRate(15)
    background(240, 100, 0); //black
   // green button
   let greenBtn = createButton('green');
    greenBtn.position(0, 0);
    greenBtn.mousePressed(function() {
      changeColor('100')  
    });

    // pink button
    let pinkBtn = createButton('pink');
    pinkBtn.position(0, 30);
    pinkBtn.mousePressed(function() {
      changeColor('340')  
    });

   // blue button
   let blueBtn = createButton('blue');
   blueBtn.position(0, 60);
   blueBtn.mousePressed(function() {
      changeColor('200')  
    });

    // yellow button
    let yellowBtn = createButton('yellow');
    yellowBtn.position(0, 90);
    yellowBtn.mousePressed(function() {
      changeColor('50')  
    });


        // reset button
        let clearBtn = createButton('reset');
        clearBtn.position(0, 120);
        clearBtn.mousePressed(function() {
          clear();
          background(240, 100, 0);  //black

        });



  }
  


sketch.draw= function(){

    let frmRatio = map(frameCount % 120, 0, 120, 1.0, 0.0);

    blendMode(BLEND);
    noStroke();

    if (mouseIsPressed) {
      blendMode(ADD);
      for (let r = 0.0; r < 1; r += 0.01) {
      fill(c, frmRatio * 100, (.3 - r) * 5, 100);
      ellipse(mouseX, mouseY, w*r );

    }
  }

}

function changeColor(cval) {
  //let val = random(255);
  c = cval;

}
/*
function keyTyped() {

  if (key == 'p') {
    // x style pen
    c = 340;
  }
  
    if (key == 'y') {
    // x style pen
    c = 50;
  }
    if (key == 'g') {
    // x style pen
    c = 100;
  }
  
    if (key == 'r') {
    // x style pen
    c = 500;
  }
}
*/