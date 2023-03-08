function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let boxHeight = 80
  let boxWidth = 80
  fill(250, 250, 50)
  
  // collum 1
  rect(0, 0, boxWidth, boxHeight) // top to bottom
  fill(25, 55, 100)
  rect(0, 80, boxWidth, boxHeight)
  rect(0, 160, boxWidth, boxHeight)
  rect(0, 240, boxWidth, boxHeight)
  rect(0, 320, boxWidth, boxHeight)
  
  //collum 2
  fill(250, 250, 50)
  rect(80, 0, boxWidth, boxHeight) // top to bottom
  fill(25,55,100)
  rect(80, 80, boxWidth, boxHeight)
  rect(80, 160, boxWidth, boxHeight)
  rect(80, 240, boxWidth, boxHeight)
  rect(80, 320, boxWidth, boxHeight)
  
  // collum 3
  fill(250,250, 50)
  rect(160, 0, boxWidth, boxHeight) // top to bottom
  rect(160, 80, boxWidth, boxHeight)
  rect(160, 160, boxWidth, boxHeight)
  rect(160, 240, boxWidth, boxHeight)
  rect(160, 320, boxWidth, boxHeight)
  
  // collum 4
  rect(240, 0, boxWidth, boxHeight) // top to bottom
  fill(25,55,100)
  rect(240, 80, boxWidth, boxHeight)
  rect(240, 160, boxWidth, boxHeight)
  rect(240, 240, boxWidth, boxHeight)
  rect(240, 320, boxWidth, boxHeight)
  
  // collum 5
  fill(250,250,50)
  rect(320, 0, boxWidth, boxHeight) // top to bottom
  fill(25,55,100)
  rect(320, 80, boxWidth, boxHeight)
  rect(320, 160, boxWidth, boxHeight)
  rect(320, 240, boxWidth, boxHeight)
  rect(320, 320, boxWidth, boxHeight)
}
