const canvas = document.querySelector("#canvas");

const grid = document.createElement("div");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    canvas.appendChild(grid);
    grid.classList.add('square');
}

const square = document.querySelectorAll('.square');

