let data: unknown;
if (typeof data === 'string') {
}

class Point {
  x;
  y;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(this.x, this.y);
  }
}

let point = new Point();
