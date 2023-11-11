let gridSize = 32;
let eraser = false;

const grid = document.querySelector("#grid");
setGridSize(gridSize);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    clearGrid();
    eraser = false;
    turnOnEraser.classList.remove("active");
    setGridSize(gridSize);
});
const changeSize = document.querySelector("#changeSize");
changeSize.addEventListener("click", changeGridSize);
const turnOnEraser = document.querySelector("#eraser");
turnOnEraser.addEventListener("click", () => {
    if (eraser) {
        turnOnEraser.classList.remove("active");
        eraser = false;
    } else {
        turnOnEraser.classList.add("active");
        eraser = true;
    }
});
function paintBlock(e) {
    if (eraser) {
        e.target.classList.remove("painted");
    } else {
        e.target.classList.add("painted");
    }
}

function changeGridSize() {
    let newGridSize = parseInt(prompt("Set the size of the grid: \n For a 48x48 grid, type 48"));

    if (newGridSize >= 100) return alert("Keep it under 100");
    if (newGridSize < 1) return alert("Keep it above 1");
    if (typeof newGridSize !== "number") return alert("Please use a valid integer");

    if (isNaN(newGridSize) || newGridSize === undefined) {
        setGridSize(gridSize);
    } else if (gridSize !== newGridSize) {
        setGridSize(newGridSize);
    }
}

function setGridSize(size) {
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.addEventListener("mouseover", paintBlock);
        grid.insertAdjacentElement("beforeend", block);
    }
}

function clearGrid() {
    let blocks = grid.querySelectorAll("div");
    eraser = false;
    blocks.forEach((div) => div.remove());
}
