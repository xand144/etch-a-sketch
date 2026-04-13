function createGrid(width, height) {
    for (let i = 1; i <= height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= width; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

const grid = document.querySelector("#grid-container");

createGrid(16, 16);