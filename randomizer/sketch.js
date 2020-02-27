let dogs = [{name:"kate", color:"white"}, {name:"kiki", color:"red"}, {name:"geo", color:"wblack"}];
let randomIndex;

function setup(){
createCanvas(600, 600);
background(200);
randomIndex = int(random(dogs.length));
  console.log(dogs[randomIndex].name);
  window.alert(dogs[randomIndex].name);
}

function draw(){

}
