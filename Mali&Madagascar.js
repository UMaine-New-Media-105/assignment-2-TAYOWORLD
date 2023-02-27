function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
   // When pressing down on the flag it switchs to another 
  MaliFlag();
 
}

function MaliFlag(){
   if(mouseIsPressed){
    GascarFlag();
   } else{
     
  push();
  fill(20, 181, 58);
  rect(0, 0,200, 400);
  
  fill(252, 209, 22);
  rect(200,0,200,400);
  
  fill(206, 17, 38);
  rect(400,0,200,400);
  pop();
 } 
}

function GascarFlag(){
  push();
   
  fill(255, 255, 255);
  rect(0, 0,200, 400);
  
  fill(252, 61, 50);
  rect(200, 0,400,200);
  
  fill(0, 126, 58);
  rect(200, 200,400,200);  
  pop();
  
}
