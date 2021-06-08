const container = document.querySelector('#container');

function createGrid(rows, colums) {
    for (let i = 0; i < rows * colums; i++) {
        const div = document.createElement('div');
        div.classList.toggle('cell');
        container.appendChild(div);
    }

    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));

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

    var gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(gridPixel => gridPixel.style.backgroundColor = "rgba(255, 255, 255, 0.865)");

    let res = prompt("How any : ");
    alert(res);
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clear);

createGrid(16, 16);