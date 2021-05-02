let dvd;
let edgeHit = 0;
let cornerHit = 0;
let dvdImage;
let dvdImageInput;

function setup() {
  createCanvas(1000, 600);
  print(width, height);
  dvd = new Dvd();
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
}

class Dvd {
  constructor() {
    this.x = 300;
    this.y = 400;
    this.sizex = 100;
    this.sizey = 60;

    this.xspeed = 5;
    this.yspeed = 5;
  }

  show() {
    rect(this.x,
         this.y,
         this.sizex,
         this.sizey)
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
