const container = document.createElement("div");
container.setAttribute("id","container");
document.body.appendChild(container);

//Will be redefined later to accept user input
let gridSize = 16;

function createGrid() {
    for (i = 0; i <= gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.setAttribute("class", "grid");
        container.appendChild(gridElement);
        }
    }

