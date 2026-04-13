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
}

const grid = document.querySelector("#grid-container");

createGrid(16);