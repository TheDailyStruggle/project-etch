const canvas = document.querySelector("#canvas");
const sizeBtn = document.querySelector("#sizeBtn");

let newGrid = 0;

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add('square');
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";
    })
    canvas.appendChild(grid);
};

sizeBtn.addEventListener('click', () => {
    clearGrid();
})

function clearGrid() {
    canvas.innerHTML = '';
    let newGrid = prompt("Please enter a number from 4 to 100 to make your grid size", 16);
    drawGrid(newGrid);
};

function drawGrid(newGrid) {
    const gridSize = (newGrid * newGrid);
    for (let i = 0; i < gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add('square');
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "black";
        })
        canvas.appendChild(grid);
        let dims = ((1 / newGrid) * 100)
        grid.style.width = `${dims}%`
        grid.style.height = `${dims}%`
    };
}


