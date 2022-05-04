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
const container_div = document.getElementById("container");

function createGrid() {
    for (let i = 0; i < (16*16); i++) {
        const gridsq_div = document.createElement("div");
        gridsq_div.classList.add("gridsq");

        container_div.appendChild(gridsq_div);

        gridsq_div.addEventListener('mouseenter', changeColor);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

createGrid();