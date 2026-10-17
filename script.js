let numberOfSquares = 16;


const container = document.querySelector(".container");
// Creating a button to use to clear the grid, incase user wants to start over
const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Reset";
resetButton.addEventListener('click',newGrid);
document.body.insertBefore(resetButton, container);


// Creating a Button that will ask users for how many grids they want to create
const promptButton = document.createElement("button");
promptButton.textContent = "Number of Squares";
document.body.insertBefore(promptButton, container);


// Made a reusable function for the Grid, whilst also making sure that 16 is the base grid that appears on the screen first.
function createGrid(gridNumber){
    for (let i = 0; i < gridNumber; i++){
        for(let j = 0; j < gridNumber; j++){
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("div1");

            // Creating an event so that when the mouse leaves the box, it rtains the color
            squareDiv.addEventListener('mouseenter', ()=> {
                squareDiv.classList.add("isHovered");
            })            
            container.appendChild(squareDiv);
            // Calculating the height and width so that the boxes fit irregardless of the amount of boxes
            const dynamicWidth = 100 / gridNumber;
            squareDiv.style.height = `${dynamicWidth}%`;
            squareDiv.style.width = `${dynamicWidth}%`;
        }
    }
}
createGrid(16);


// This runs when the button for the Number of squares you want pop up
promptButton.addEventListener('click', () =>{
   numberOfSquares = prompt("Enter the number of Squares you want from 1 to 100!");
   

   if(numberOfSquares >= 1 && numberOfSquares <= 100){
        newGrid();
        
    }
    else{
        alert("Please enter a number from 1 to 100!");
    }

});

// Function to clear the grid of any highlighted boxes after hovering
function newGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(numberOfSquares);
}