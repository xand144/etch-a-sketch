function createGrid(squaresPerSide) {
    for (let i = 1; i <= squaresPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square", "grid");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    document.addEventListener("DOMContentLoaded", () => {
        squares = document.querySelectorAll(".square");
        addEvents();
    })
}

function replaceGrid() {

}

function addEvents() {
    squares.forEach(square => square.addEventListener("mouseenter", function(e) {
        e.target.classList.add("black");
    }))
    btnNewGrid.addEventListener("click", () => {
    })
    btnGridView.addEventListener("click", () => {
        squares.forEach(square => square.classList.toggle("grid"));
    })
}

const grid = document.querySelector("#grid-container");
const btnNewGrid = document.querySelector("#new-grid");
const btnGridView = document.querySelector("#toggle-gridview");

let squares;

createGrid(16);