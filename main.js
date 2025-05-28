let penColor = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  boardSize = size * size;

  for (let i = 0; i < boardSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
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

function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "rgb(215, 239, 247)"));
}

const buttonBlack = document.querySelector(".btn-black");
const buttonRandom = document.querySelector(".btn-rainbow");
const buttonEraser = document.querySelector(".btn-eraser");
const selectedDivs = document.querySelectorAll(".selected");

const btnBlackIndicator = buttonBlack.querySelector(".selected");
btnBlackIndicator.style.display = "inline";

function toggleSelected(btn) {
  selectedDivs.forEach((div) => {
    if (div.parentElement === btn) {
      div.style.display = "inline";
    } else {
      div.style.display = "none";
    }
  });
}

buttonBlack.addEventListener("click", () => {
  changeColor("black");
  toggleSelected(buttonBlack);
});

buttonRandom.addEventListener("click", () => {
  changeColor("random");
  toggleSelected(buttonRandom);
});

buttonEraser.addEventListener("click", () => {
  changeColor(`rgb(215, 239, 247)`);
  toggleSelected(buttonEraser);
});

window.onkeydown = function (e) {
  console.log(e.key);

  if (e.key === "b") {
    changeColor("black");
    toggleSelected(buttonBlack);
  }
  if (e.key === "r") {
    changeColor("random");
    toggleSelected(buttonRandom);
  }
  if (e.key === "e") {
    changeColor(`rgb(215, 239, 247)`);
    toggleSelected(buttonEraser);
  }
  if (e.key === "c") {
    clearBoard();
  }
};
