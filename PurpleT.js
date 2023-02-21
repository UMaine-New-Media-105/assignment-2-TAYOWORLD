function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  beginShape();
  fill("purple")
vertex(30,15);
vertex(200,15);
vertex(200, 75);
vertex(30, 75);
endShape(CLOSE);
  
  
   beginShape();
  fill("purple")
  noStroke();
vertex(80, 75);
vertex(150,75);
vertex(150,200);
vertex(80,200);
endShape(CLOSE);
  
  
}
