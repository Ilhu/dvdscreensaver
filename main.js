let dvd;

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
}

class Dvd {
  constructor() {
    this.x = 500;
    this.y = 300;
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
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.x + this.sizex == width || this.x == 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y + this.sizey == height || this.y == 0) {
      this.yspeed = this.yspeed * -1;
    }
  }
}
