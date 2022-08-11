class Grid {
  constructor(dimX, dimY) {
    this.array = [];
    this.dimY = dimY;
    this.dimX = dimX
    for (let i = 0; i < dimY; i++) {
      this.array[i] = []
      for (let j = 0; j < dimX; j++) {
        this.array[i][j] = 0;
      }
    }
  }
}

class Cell {
  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {array} livingspace 
   */
  constructor(x, y, livingSpace) {
    this.pos = {
      x: x,
      y: y
    }
    this.home = livingSpace;
    this.home.array[y][x] = 1;
  }

  up() {

    if ((this.pos.y) > 0) {
      this.home.array[this.pos.y - 1][this.pos.x] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.y += -1;
      this.pos.x = this.pos.x;
    } else {
      this.home.array[this.home.dimY - 1][this.pos.x] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.y = this.home.dimY - 1;
      this.pos.x = this.pos.x;
      console.log(this.pos)
    }
  }
  down() {

    if ((this.pos.y) < this.home.dimY - 1) {
      this.home.array[this.pos.y + 1][this.pos.x] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.y += +1;
      this.pos.x = this.pos.x;
    } else {
      this.home.array[0][this.pos.x] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.y = 0
      this.pos.x = this.pos.x;
      console.log(this.pos)
    }

  }
  left() {

    if ((this.pos.x) > 0) {
      this.home.array[this.pos.y][this.pos.x - 1] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.x += -1;
      this.pos.y = this.pos.y;
    } else {
      this.home.array[this.pos.y][this.home.dimX - 1] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.x = this.home.dimX - 1;
      this.pos.y = this.pos.y;
      console.log(this.pos)
    }
  }
  right() {

    if ((this.pos.x) < this.home.dimX-1) {
      this.home.array[this.pos.y][this.pos.x + 1] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.x += 1;
      this.pos.y = this.pos.y;
    } else {
      this.home.array[this.pos.y][0] = 1
      this.home.array[this.pos.y][this.pos.x] = 0
      this.pos.x = 0;
      this.pos.y = this.pos.y;
      console.log(this.pos)
    }
  }
}
