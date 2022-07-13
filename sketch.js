let canvas;


let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen6;
let imagen7;
let imagen8;
let imagen9;
let imagen10;
let imagen11;
let imagen12;
let imagen13;
let imagen14;
let imagen15;

  
 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);

  imagen1 = loadImage("imag/imagen1.png");
  imagen2 = loadImage("imag/imagen2.png");
  imagen3 = loadImage("imag/imagen3.png");
  imagen4 = loadImage("imag/imagen4.png");
  imagen5 = loadImage("imag/imagen5.png");
  imagen6 = loadImage("imag/imagen6.png");
  imagen7 = loadImage("imag/imagen7.png");
  imagen8 = loadImage("imag/imagen8.png");
  imagen9 = loadImage("imag/imagen9.png");
  imagen10 = loadImage("imag/imagen10.png");
  imagen11 = loadImage("imag/imagen11.png");
  imagen12 = loadImage("imag/imagen12.png");
  imagen13 = loadImage("imag/imagen13.png");
  imagen14 = loadImage("imag/imagen14.png");
  imagen15 = loadImage("imag/imagen15.png");

  textFont('Righteous')


}



function draw(){
  background(0); 

  frameRate(3)
  image(imagen1, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen2, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen3, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen4, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen5, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen6, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen7, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen8, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen9, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen10, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen11, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen12, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen13, random(windowWidth), random(windowHeight), 200, 200);
  image(imagen14, random(windowWidth), random(windowHeight), 100, 100);
  image(imagen15, random(windowWidth), random(windowHeight), 200, 200);

  fill(255)
  textSize(200);
  text("ALTEREGO", 220, 500);


}
