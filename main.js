/**
 * New Features
 * After making this work for the 16x16 grid, use JS to dynamically create the
 * grid for 32x32 and other grid sizes when the user select a grid size from
 * the screen.
 * Action: 1. do this by creating a variable for the grid size
 * 2. use back-tick notation to get the grid size and pass it to the 
 * grid-template-columns and grid-template-rows repeat function as the required
 * integer part. 
 */
const DEFAULT_SIZE = 16;

let gridsize = DEFAULT_SIZE;

const grid_div = document.getElementById("grid");
const grid32_btn = document.getElementById("grid32");
const grid64_btn = document.getElementById("grid64");

// Event listeners
grid32_btn.addEventListener('click', create32by32grid);
grid64_btn.addEventListener('click', create64by64grid);

// Functions
function clearGrid() {
    grid_div.innerHTML = "";
}

function create64by64grid() {
    gridsize = 64;
    clearGrid();
    createGrid(gridsize);
}

function create32by32grid() {
    gridsize = 32;
    clearGrid();
    createGrid(gridsize);
}

function createGrid(size) {
    grid_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const gridsqs_div = document.createElement("div");
        gridsqs_div.classList.add("gridsqs");
        gridsqs_div.addEventListener('mouseover', changeColor);
        grid_div.appendChild(gridsqs_div);
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

createGrid(DEFAULT_SIZE);
// gridsize_range.oninput = function() {
//     createGrid(gridsize_range.value);
//     gridvalue_span.innerHTML = this.value + " x " + this.value;

// };