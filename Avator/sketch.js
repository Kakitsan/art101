let x1;
let x2;
var mic;
var Repeatdrawing;

function setup() {
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
  Repeatdrawing = new Repeat();
//   background("green");
//   Scabbard();
//   Sword();
//   Body();
//   Head();
//   Sun(30,30);
//   angleMode(DEGREES);

}
  function draw(){
  Repeatdrawing.draw();
  }
  function mouseClicked(){
     push();
   noStroke();
   // translate(200,455);
   rotate(0);
  for(i=0;i<255;i++){fill(255, i,mouseX);}
   // fill("white");
   quad(172, 465, 105, 350, 145, 230, 210, 454);//sword
    fill("black");
   quad(172, 487, 155, 470, 227, 448, 225, 469);
    fill("brown"); //arm
    quad(210, 500, 190, 480, 445, 400, 445, 480);
   pop();
  }
class Repeat{
    draw(){
    // console.log("mouse X is: " +mouseX);
    // x1 = map(mouseX, 0, width, 0, -2);
    console.log("mic level is: " + mic.getLevel());
    x1 = map(mic.getLevel(), 0, 1, 0, -50);
    x2 = map(mic.getLevel(), 0, 1, 0, -200);
    background(mouseX,155,mouseY);
    Repeatdrawing.Sun(30,30);
    Repeatdrawing.Scabbard();
    Repeatdrawing.Sword(x2);
    Repeatdrawing.Body();
    Repeatdrawing.Head();
    angleMode(DEGREES);
    Repeatdrawing.Mouth(x1);
  }
  Head(){
    noStroke();
    fill("black");
    triangle(380, 43, 290, 55, 350, 250);
    fill("brown");
    rect(165, 130, 280, 280, 15);
    // fill("white"); //tooth
    // rect(190, 280, 50, 40);
    fill("black");
    quad(390, 230, 370, 200, 340, 200, 310, 230);
    // fill("grey"); //mandibular
    // quad(165, 410, 150, 300, 445, 300, 445, 410);
    fill(0, 60, 80);
    quad(165, 230, 230, 130, 340, 130, 165, 300);
    fill("white");
    ellipse(350, 220, 65, 50);
    // arc(350, 200, 80, 80, 0, PI); //eye
    fill("black");
    ellipse(340, 220, 45, 30);
    // arc(345, 200, 60, 60, 0, PI); //eye
    stroke('white'); // Change the color
    strokeWeight(10); // Make the points 10 pixels in size
    point(325, 220);
  }
  Scabbard(){
    noStroke();
    fill("black");
    quad(450, 400, 500, 200, 550, 200, 500, 400); //sword
    push();
    fill("purple");
    // ellipseMode(CORNER);
    ellipse(mouseX, mouseY+21, 45, 45);
    pop();
    fill("white");
    quad(490, 240, 495, 220, 545, 220, 540, 240); //cothes on sword
    fill("white");
    quad(480, 280, 485, 260, 535, 260, 530, 280);
    stroke('black');
    strokeWeight(10);
    line(545, 205, mouseX, mouseY);
  }
  Mouth(x1){
      push();
      noStroke();
      translate(445 ,410);
      rotate(x1);
      fill("white"); //tooth
      rect(-260, -140, 50, 40);
      fill("grey");
      quad(-280, 0, -295, -110, 0, -110, 0, 0);
      pop();
  }
  Body(){
    noStroke();
    // fill("brown"); //arm
    // quad(210, 500, 190, 480, 445, 400, 445, 480);
    fill(255, 205, 122);
    rect(330, 320, 180, 250, 15); //cloth
    fill("brown");
    triangle(340, 320, 380, 490, 430, 320); //body
    fill("black"); //waist
    rect(330, 464, 180, 40);
    fill("brown");
    triangle(450, 600, 490, 560, 510, 600); //right foot
    fill("brown");
    triangle(370, 600, 410, 560, 430, 600); //left foot

  }
  Sun(x,y) {
    noStroke();
    fill("orange");
    circle(x, y, mouseX);//Sun
}
 Sword(x2){
   push();
   noStroke();
   translate(375, 500);
   rotate(x2);
   fill("white");
   quad(-222, -100, -259, -250, -175, -370, -175, -100);//sword
    fill("black");
   quad(-250, -100, -220, -80, -175, -80, -150, -100);
    fill("brown"); //arm
    quad(-200, -80, 0, -80, 0, 0, -175, -40);
   // fill("white");
   // quad(172, 465, 105, 350, 145, 230, 210, 454);//sword
   //  fill("black");
   // quad(172, 487, 155, 470, 227, 448, 225, 469);
   //  fill("brown"); //arm
   //  quad(210, 500, 190, 480, 445, 400, 445, 480);
   pop();
 }
}
