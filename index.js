const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');

// Creates the grid
function createGrid(squares) {
    for (let i = 0; i < (squares * squares); i++) {
        const div = document.createElement('div');
        div.classList.toggle('cell');
        container.appendChild(div);
    }
}

function sizingGrid(squares) {
    container.style.setProperty('--grid-rows', squares);
    container.style.setProperty('--grid-columns', squares);
}

// Clears the content of the container
function delGrid() {
    container.innerHTML = "";
}



// Clears the grid and creates the new grid
function clear() {

    // get all the cells and set their color to
    // the "default one"
    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridPixel => gridPixel.style.backgroundColor = "rgba(255, 255, 255, 0.865)");

    // ask for the size of the new grid 
    // and create it
    let res = prompt("How many squares on each side (max 100, min 1)? ");
    if (res > 100 || res <= 0)
        res = 16;

    delGrid();
    sizingGrid(res);
    createGrid(res);

}



// Returns a random color
function generateColor() {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return "rgba(" + r + ", " + g + ", " + b + ", 1)";
}

// Changes the color
function randomColor() {
    this.style.backgroundColor = generateColor();

}

function blackColor() {
    this.style.backgroundColor = "#000";
}

function rainbow() {
    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(cell => cell.removeEventListener('mouseenter', blackColor));
    gridCells.forEach(cell => cell.addEventListener('mouseenter', randomColor));

}



function darkerColors() {
    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(cell => cell.removeEventListener('mouseenter', randomColor));
    gridCells.forEach(cell => cell.addEventListener('mouseenter', blackColor));
}


// Default grid
sizingGrid(16);
createGrid(16);

// Event listeners
clearBtn.addEventListener('click', clear);
blackBtn.addEventListener('click', darkerColors);
rainbowBtn.addEventListener('click', rainbow);