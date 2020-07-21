////////////////////dom elements and variables//////////////////////////////
const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset');
const colorPicker = document.querySelector('#color');
const randomColorBtn = document.querySelector('.random-color-btn');

let isResetClicked = false;
const initialNumberOfSqs = 16;
let grid = document.createElement('div');

////////////////////////// functions ///////////////////////////////////////
function createGrid(number) {
  grid = document.createElement('div');
  grid.classList.add('grid');
  grid.style.gridTemplateColumns = `repeat(${number},1fr)`;
  grid.style.gridTemplateRows = `repeat(${number},1fr)`;
  gridContainer.appendChild(grid);
  isResetClicked = false;

  // number of squares in grid
  const pixel = number * number;
  for (let i = 0; i < pixel; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    grid.appendChild(square);

    document.documentElement.style.setProperty(
      '--square-size',
      `${600 / number} px`
    );
    // makes all squares have equal width and height
    square.style.width = `${600 / number}px`;
    square.style.height = `${600 / number}px`;
  }
}

function clearGridContainer() {
  gridContainer.removeChild(grid);
}

function reseting() {
  // clear the gridContainer
  clearGridContainer();
  // asks for the number of squares
  const number = Number(prompt('How many squares do you want?'));
  // create and display
  createGrid(number);
  // always starts with black
  isResetClicked = false;
}

function getRandomColor() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
    255
  )})`;
}

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

///////////////////event listeners////////////////////////////////////////////
window.addEventListener('load', createGrid(initialNumberOfSqs));
resetBtn.addEventListener('click', reseting);

gridContainer.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = colorPicker.value;
});

gridContainer.addEventListener('mouseover', e => {
  if (isResetClicked) {
    e.target.style.backgroundColor = getRandomColor();
  }
});

colorPicker.addEventListener('change', e => (isResetClicked = false));

randomColorBtn.addEventListener('click', e => (isResetClicked = true));
