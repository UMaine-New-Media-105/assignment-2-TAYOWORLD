function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  row1()
  row2()
  row3()
  row4()
  row5()
  
}

function row1 (){
  fill("yellow")
  rect (0,0,80)
  rect(80,0,80)
  rect(160,0,80)
  rect(240,0,80)
  rect(320,0,80)
}

function row2(){
  rect(0,80,80)
  fill("black")
  rect(80,80,80)
  rect(160,80,80)
  rect(240,80,80)
  fill("yellow")
  rect(320,80,80)
  
}

function row3(){
  rect(0,160,80)
  rect(80,160,80)
  fill("black")
  rect(160,160,80)
  fill("yellow")
  rect(240,160,80)
  rect(320,160,80)
  
}

function row4(){
  rect(0,240,80)
  rect(80,240,80)
  fill("black")
  rect(160,240,80)
  fill ("yellow")
  rect(240,240,80)
  rect(320,240,80)
  
}

function row5(){
  rect(0,320,80)
  rect(80,320,80)
  rect(160,320,80)
  rect(240,320,80)
  rect(320,320,80)
  
}
