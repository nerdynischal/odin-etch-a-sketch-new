let penColor = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  boardSize = size * size;
  for (let i = 0; i < boardSize * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    //square.style.backgroundColor = "blue";

    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 || input <= 100) {
    populateBoard(input);
    console.log(input);
  } else {
    console.log("too many... ");
  }
}

function colorSquare() {
  if (penColor === "random") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    this.style.backgroundColor = "#" + randomColor;
  } else {
    this.style.backgroundColor = penColor;
  }
}

function changeColor(choice) {
  penColor = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "green"));
}
