function createGrid(squaresPerSide) {
    for (let i = 1; i <= squaresPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square", "grid");
            square.addEventListener("mouseenter", function(e) {
                e.target.classList.add("black");
            })
            row.appendChild(square);
        }
        grid.appendChild(row);
        squares = document.querySelectorAll(".square");
    }
    document.addEventListener("DOMContentLoaded", () => {
        addEvents();
    })
}

function replaceGrid() {
    grid.replaceChildren();
    let size;
    do {
        size = prompt("How many squares per side? (Max 100)", 16);
    } while (isNaN(size) || size === null || size < 1 || size > 100);
    createGrid(size);
}

function addEvents() {
    btnNewGrid.addEventListener("click", () => {
        replaceGrid();
    })
    btnGridView.addEventListener("click", () => {
        squares = document.querySelectorAll(".square");
        squares.forEach(square => square.classList.toggle("grid"));
    })
}

const grid = document.querySelector("#grid-container");
const btnNewGrid = document.querySelector("#new-grid");
const btnGridView = document.querySelector("#toggle-gridview");

let squares = document.querySelectorAll(".square");

createGrid(16);