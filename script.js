function createGrid(squaresPerSide) {
    for (let i1 = 1; i1 <= squaresPerSide; i1++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i2 = 1; i2 <= squaresPerSide; i2++) {
            const square = document.createElement("div");
            square.classList.add("square", "grid");
            square.addEventListener("mouseenter", function(e) {
                const rgb = `rgb(${random()}, ${random()}, ${random()}`;
                if (currentColour === "rgb") {
                    e.target.style.backgroundColor = rgb;
                } else if (currentColour === "black") {
                    e.target.setAttribute("style", "background-color: rgb(0, 0, 0)");
                }
            })
            row.appendChild(square);
        }
        grid.appendChild(row);
        squares = document.querySelectorAll(".square");
    }
}

// Generate random RGB values
function random() {
    return Math.floor(Math.random() * 256);
}

function replaceGrid() {
    grid.replaceChildren();
    let size;
    do {
        size = prompt("How many squares per side? (Max 100)", 16);
    } while (isNaN(size) || size < 1 || size > 100)
    createGrid(size);
}

function addEvents() {
    btnNewGrid.addEventListener("click", function() {
        replaceGrid();
    })
    btnGridView.addEventListener("click", function() {
        squares.forEach(square => square.classList.toggle("grid"));
    })
    btnColours.addEventListener("click", function() {
        if (currentColour === "rgb") {
            currentColour = "black";
            btnColours.textContent = "Colour: Black"
        } else if (currentColour === "black") {
            currentColour = "rgb";
            btnColours.textContent = "Rainbow Mode!"
        }
    });
}

const grid = document.querySelector("#grid-container");
const btnNewGrid = document.querySelector("#new-grid");
const btnGridView = document.querySelector("#toggle-gridview");
const btnColours = document.querySelector("#colours");

let squares;
let currentColour = "black";

createGrid(16);
addEvents();