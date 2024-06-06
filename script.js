const wrapper = document.createElement("div");
wrapper.setAttribute("class","wrapper");
document.body.appendChild(wrapper);

const container = document.createElement("div");
container.setAttribute("class","container");
wrapper.appendChild(container);

//Will be redefined later to accept user input
let gridSize = 256;
let gridLength = gridSize / 16;


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

createGrid()

const gridButton = document.createElement("button");
gridButton.setAttribute("class", "btn");
gridButton.textContent = "Select grid size";
wrapper.appendChild(gridButton);

const gridSizeDialog = document.createElement("dialog");
wrapper.appendChild(gridSizeDialog);

const gridSizeModalButton = document.createElement("button");
gridSizeModalButton.setAttribute("class", "btn");
gridSizeModalButton.textContent = "Close";
gridSizeDialog.appendChild(gridSizeModalButton);

const gridModalText = document.createElement("p");
gridModalText.textContent = "What size is your etch-a-sketch?";
gridSizeDialog.appendChild(gridModalText);

gridButton.addEventListener("click", () => {
    gridSizeDialog.showModal();
})

gridSizeModalButton.addEventListener("click", () => {
    gridSizeDialog.close();
})
