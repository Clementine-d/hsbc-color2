// if mouseX value of pixels of the screen then can change anyting 

let myFont;
function preload() {
  myFont = loadFont('assets/UniversNextforHSBC-Regular.otf');
}

let t = 'Together';
let t2 = 'We';
let t3 = 'Thrive';


function setup() {
  createCanvas(600, 400);
}


function draw() {
  
  if (mouseX <= 200) {
  background(215, 216, 214);
  fill(0);
    textSize(60);
  text(t, 40, 165, 600, 400);
  }
  
   if (mouseX >= 200) {
  background(0);
  fill(255);
     textSize(60);
  text(t2, 280, 165, 600, 400);
  }
  
   if (mouseX >= 400) {
  background(219, 0, 17);
  fill(255);
     textSize(60);
  text(t3, 390, 165, 600, 400);
  }

}

