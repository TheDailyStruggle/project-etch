const canvas = document.querySelector("#canvas");

const grid = document.createElement("div");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add('square');
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";
    })
    canvas.appendChild(grid);
};





