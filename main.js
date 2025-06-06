let penColor = "black";
let isDrawing = false;

function changePenColor(color) {
  penColor = color;
}

/* Create grid on board */
function populateBoard(size) {
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove()); //remove previous grid

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  boardSize = size * size;

  board.addEventListener("mousedown", () => {
    isDrawing = true;
  });

  board.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  for (let i = 0; i < boardSize; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", colorGrid);
    square.addEventListener("mousedown", colorGrid);
  }
}

/* Change grid size */
function changeSize(input) {
  if (!Number.isInteger(Number(input)) || input < 2 || input > 100) {
    window.alert("Please enter a valid number between 2 and 100.");
  } else {
    populateBoard(input);
  }
}

/* Draw colour on grid */
function colorGrid(e) {
  if (e.type === "mouseover" && !isDrawing) return;

  if (penColor === "random") {
    e.target.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    e.target.style.backgroundColor = penColor;
  }
}

/* Clears the board */
function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "rgb(215, 239, 247)"));
}

/* Get black button and add functionality */
const buttonBlack = document.querySelector(".btn-black");
buttonBlack.addEventListener("click", () => {
  changePenColor("black");
  changeCursor("black");
  toggleSelected(buttonBlack);
});

/* Get random button and add functionality */
const buttonRandom = document.querySelector(".btn-random");
buttonRandom.addEventListener("click", () => {
  changePenColor("random");
  changeCursor("random");
  toggleSelected(buttonRandom);
});

/*Get eraser button and add functionality */
const buttonEraser = document.querySelector(".btn-eraser");
buttonEraser.addEventListener("click", () => {
  changePenColor(`rgb(215, 239, 247)`);
  changeCursor("eraser");
  toggleSelected(buttonEraser);
});

/*Get clear button and add functionality */
const buttonClear = document.querySelector(".btn-clear");
buttonClear.addEventListener("click", clearBoard);

/*Toggle selected indicator on buttons */
const selectedDivs = document.querySelectorAll(".selected");
function toggleSelected(btn) {
  selectedDivs.forEach((div) => {
    if (div.parentElement === btn) {
      div.style.display = "inline";
    } else {
      div.style.display = "none";
    }
  });
}

/* Add keyboard functionality */
window.onkeydown = function (e) {
  console.log(e.key);

  if (e.key === "b") {
    changePenColor("black");
    changeCursor("black");
    toggleSelected(buttonBlack);
  }
  if (e.key === "r") {
    changePenColor("random");
    changeCursor("random");
    toggleSelected(buttonRandom);
  }
  if (e.key === "e") {
    changePenColor(`rgb(215, 239, 247)`);
    changeCursor("eraser");
    toggleSelected(buttonEraser);
  }
  if (e.key === "c") {
    clearBoard();
  }
};

/*Cursor setting */
function changeCursor(cursor) {
  const board = document.querySelector(".board");
  if (cursor === "black") {
    board.style.cursor = `url("https://nerdynischal.github.io/odin-etch-a-sketch-new/images/plus-icon-cursor.svg") 12 12, auto`;
  } else if (cursor === "random") {
    board.style.cursor = `url("https://nerdynischal.github.io/odin-etch-a-sketch-new/images/random-icon-cursor.svg") 12 12, auto`;
  } else if (cursor === "eraser") {
    board.style.cursor =
      'url("https://nerdynischal.github.io/odin-etch-a-sketch-new/images/minus-icon-cursor.svg") 12 12, auto';
  }
}

/* Create board with default values */
populateBoard(20);
toggleSelected(buttonBlack);
changeCursor("black");
