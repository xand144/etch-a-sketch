function createGrid(squaresPerSide) {
    for (let i = 1; i <= squaresPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    document.addEventListener("DOMContentLoaded", () => {
        squares = document.querySelectorAll(".square");
        addEvents();
    })
}

function addEvents() {
    squares.forEach(square => square.addEventListener("mouseenter", function(e) {
        e.target.classList.add("black");
    }))
}

const grid = document.querySelector("#grid-container");
let squares;

createGrid(16);