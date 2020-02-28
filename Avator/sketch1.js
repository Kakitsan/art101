let dogs = [{name:"kate", color:"white"}, {name:"kiki", color:"red"}, {name:"geo", color:"black"}, {name:"Bobo", color:"yellow"}, {name:"Nick", color:"green"}, {name:"boss", color:"brown"}];
let randomIndex;
let animating = false;
// let counter = 0;

function setup(){
createCanvas(600, 600);
background(200);
text("click to randomize", 50, 50);
// setInterval(changeBackground, 1000);
// setTimeout(changeBackground, 1000);
}

function draw(){
  if(animating == true)
  {
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(random(width), random(height), random(50, 200));

  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// }else{
//
// }
// }
function randomizer(){
  animating = false;
  if (dogs[0]){
    background(random(200,255));
    randomIndex = int(random(dogs.length));
      text(`${dogs[randomIndex].name} 's favorite color is ${dogs[randomIndex].color}`, 50, 50);
    // text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  }
    else {
      background(random(200, 255));
    text("nothing left!", 50, 50);
    }

}
function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);


  // if (dogs[0]){
  //   background(random(200,255));
  //   randomIndex = int(random(dogs.length));
  //   text(dogs[randomIndex].name, 50, 50);
  //   dogs.splice(randomIndex, 1);
  // }
  //   else {
  //     background(random(200, 255));
  //   text("nothing left!", 50, 50);
  //   }
}
