const wrapper = document.createElement("div");
wrapper.setAttribute("class","wrapper");
document.body.appendChild(wrapper);

const container = document.createElement("div");
container.setAttribute("class","container");
wrapper.appendChild(container);

let gridSize;
let gridLength;

const gridButton = document.createElement("button");
gridButton.setAttribute("class", "btn");
gridButton.textContent = "Select grid size";
wrapper.appendChild(gridButton);

function createGrid() {
    for (i = 0; i < gridLength; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.setAttribute("class", "column");
        container.appendChild(gridColumn);
        for (j=0; j < gridLength; j++) {
            const gridElement = document.createElement("div");
            gridElement.setAttribute("class", "grid");
            gridElement.addEventListener("mouseover", () => {
                gridElement.style.backgroundColor = "black";
            })
            gridColumn.appendChild(gridElement);
        }
        }
    }

gridButton.addEventListener("click", () => {
        gridSize = Number(prompt("What size is your grid?"));
        gridLength = Math.sqrt(gridSize);
        if (container.hasChildNodes()) {
           for (i = 0; i < gridLength; i++) {
                container.innerHTML = "";
            }
        }
        createGrid();
})