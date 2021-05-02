let dvd;
let edgeHit = 0;
let cornerHit = 0;
let dvdImage;
let dvdImageInput;

function setup() {
  createCanvas(1000, 600, WEBGL);
  print(width, height);
  dvdImage = loadImage("DVD_video_logo.png");
  dvd = new Dvd(dvdImage);
}

function dvdFunctions() {
  dvd.show();
  dvd.movement();
}

function draw() {
  background(230);
  dvdFunctions();
  textSize(30);
  text("the square has hit the edge " + edgeHit + " times", 10, 540);
  text("the square has hit the corner " + "(doesnt yet work)" + " times", 10, 590);
  fill(255,255,255);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
}

class Dvd {
  constructor(dvd) {
    this.x = 300;
    this.y = 400;
    this.sizex = 140;
    this.sizey = 90;

    this.xspeed = 2;
    this.yspeed = 2;
    
    this.dvdImage = dvd;
  }

  show() {
    this.dvdImage.resize(this.sizex, this.sizey);
    image(this.dvdImage,
         this.x,
         this.y)
  }

  movement() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;


    if (this.x + this.sizex == width || this.x == 0) {
      this.xspeed = this.xspeed * -1;
      edgeHit = edgeHit + 1;
      print(edgeHit)
    }

    if (this.y + this.sizey == height || this.y == 0) {
      this.yspeed = this.yspeed * -1;
      edgeHit = edgeHit + 1;
      print(edgeHit)
    }
  }
}
