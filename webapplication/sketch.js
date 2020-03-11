var x = 0;
var y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
    ellipse(x, y, 10);
    print(x + "" + y);
    x++;
    y++;
}