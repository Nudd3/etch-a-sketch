const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn');

// Creates the grid
//function createGrid(rows, colums) {
function createGrid(squares) {
    for (let i = 0; i < (squares * squares); i++) {
        const div = document.createElement('div');
        div.classList.toggle('cell');
        container.appendChild(div);
    }

    // Add eventlisteners to the cells in the grid
    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
}

function sizingGrid(squares){
    container.style.setProperty('--grid-rows', squares );
    container.style.setProperty('--grid-columns', squares);
}

function delGrid() {
    container.innerHTML = "";
  }


function changeColor() {
    this.style.backgroundColor = randomColor();
}

function randomColor() {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return "rgba(" + r + ", " + g + ", " + b + ", 1)";
}


function clear() {

    // get all the cells and set their color to
    // the "default one"
    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridPixel => gridPixel.style.backgroundColor = "rgba(255, 255, 255, 0.865)");

    // ask for the size of the new grid 
    // and create it
    let res = prompt("How many squares on each side (max 100, min 1)? ");
    if(res > 100 || res <= 0)
        res = 16;
    
    delGrid();
    sizingGrid(res);
    createGrid(res);
    
    
}

function resizeGrid(squares){
    sizingGrid(squares);
    createGrid(squares);
}



// Default size
sizingGrid(16);
createGrid(16);

// Event listeners
clearBtn.addEventListener('click', clear);
//clearBtn.addEventListener('click', resizeGrid);