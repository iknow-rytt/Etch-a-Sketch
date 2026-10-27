let numberOfSquares = 16;
let isDrawing = true;
let isColored = false;

const btnContainer = document.querySelector(".btnContainer");
const container = document.querySelector(".container");


// Creating a button to use to clear the grid, incase user wants to start over
const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Reset";
resetButton.addEventListener('click',newGrid);
btnContainer.appendChild(resetButton);


// Creating a button that will enable the user to erase a single box in the grid after hovering
const eraseButton = document.createElement("button");
eraseButton.textContent = "Erase";
eraseButton.addEventListener('click', () => {
    isDrawing = !isDrawing;
});
btnContainer.appendChild(eraseButton);


// Creating a button that will toggle on the random colors for the boxes
const randomColor = document.createElement("button");
randomColor.textContent = "Random Colors";
randomColor.addEventListener('click', () =>{
    isColored  = !isColored;
})
btnContainer.appendChild(randomColor);

// Creating a Button that will ask users for how many grids they want to create
const promptButton = document.createElement("button");
promptButton.textContent = "Number of Squares";
btnContainer.appendChild(promptButton);


// Made a reusable function for the Grid, whilst also making sure that 16 is the base grid that appears on the screen first.
function createGrid(gridNumber){
    for (let i = 0; i < gridNumber; i++){
        for(let j = 0; j < gridNumber; j++){
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("div1");

            // Creating an event so that when the mouse leaves the box, it rtains the color
            squareDiv.addEventListener('mouseenter', ()=> {
                squareDiv.classList.add("isHovered");
                if(isDrawing && isColored){
                    randomColor.textContent = "Black Color";
                    squareDiv.style.backgroundColor = colorRandomizer();
                }
                else if(isDrawing){
                    randomColor.textContent = "Random Colors";
                    eraseButton.textContent = "Erase";
                    squareDiv.style.backgroundColor = "black";
                }
                else{
                    eraseButton.textContent = "Draw";
                    squareDiv.style.backgroundColor = "white";                   
                }
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

// Function to generate random number that will  be used for the rgb values
function colorRandomizer(){
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return `rgb(${R} ${G} ${B})`;
}