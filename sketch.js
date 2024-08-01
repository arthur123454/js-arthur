function setup() {
    createCanvas(600, 600);
     background("white");
  }
  
  
  function draw() {
    
    stroke ("#795548");
    fill ("#3F51B5");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }