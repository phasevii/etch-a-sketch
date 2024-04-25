const wrapper = document.createElement("div");
wrapper.setAttribute("class","wrapper");
document.body.appendChild(wrapper);

const container = document.createElement("div");
container.setAttribute("class","container");
wrapper.appendChild(container);

//Will be redefined later to accept user input
let gridSize = 16*16;

function createGrid() {
    for (i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.setAttribute("class", "grid");
        container.appendChild(gridElement);
        }
    }

createGrid()