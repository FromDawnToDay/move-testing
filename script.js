
let board = new Grid(10, 10)
console.log(board)
let DIM = {
  x: 0,
  y: 0
}
let dim = {
  y: 0,
  x: 0
}
let Player = new Cell(1, 1, board);
console.log(board)
document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    Player.up();
  }
  if (event.key == "ArrowDown") {
    Player.down();
  }
  if (event.key == "ArrowLeft") {
    Player.left();
  }
  if (event.key == "ArrowRight") {
    Player.right();
  }
})
function setup() {
  createCanvas(400, 400);
  DIM.x = board.array[0].length;
  DIM.y = board.array.length;
  dim.x = width / DIM.x;
  dim.y = width / DIM.y
}

function draw() {
  background(50);
  for (let i = 0; i < board.array.length; i++) {
    for (let j = 0; j < board.array[i].length; j++) {
      if (board.array[i][j] == 1) {
        fill(255, 255, 100);
      } else {
        fill(0, 0, 100);
      }
      push();
      translate(dim.x * j, dim.y * i);
      rectMode(CORNERS);
      rect(0, 0, dim.x, dim.y);
      pop();
    }
  }
}