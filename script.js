// SETTING GLOBAL VARIABLES FOR THE ETCH A SKETCH
let defaultWidth = 16;
let currentWidth = 0;

// SETTING UP RESET BUTTON
const theResetButton = document.querySelector('.reset');
theResetButton.addEventListener('click', resetButton);
loadGrid(defaultWidth);

// SETTING UP RESET SLIDER
let slider = document.querySelector('#mySlider');
const dimension = document.querySelector('#id1');
const dimension2 = document.querySelector('#id2');
slider.addEventListener('click', resetButton);
dimension.innerHTML = slider.value;
dimension2.innerHTML = slider.value;
slider.oninput = function() {
    dimension.innerHTML = this.value;
    dimension2.innerHTML = this.value;

}


// Setting paint picker to change on selection:
const paintPicker = document.querySelector('#colour-picker');
paintPicker.addEventListener('input', changeColour);

// ETCH A SKETCH FUNCTIONS

// Loads the grid:
function loadGrid(width) { // Takes grid width as variable.

    currentWidth = width;
    
    // Grabbing Colour Choice for page load:
    let paintbrush = document.querySelector('#colour-picker');
    paintbrush = paintbrush.value;

    for (let j = 0; j < width; j++) {
        const verticalContainer = document.createElement('div');
        verticalContainer.classList.add('vertical-container');
        verticalContainer.setAttribute('id', `vertical-container-${j + 1}`);

        for (let i = 0; i < width; i++) {
            const aSingleBox = document.createElement('div'); // Creates the single box and adds the new box class to the element
            aSingleBox.classList.add('new'); // Adds the class of 'new' to the box created
            aSingleBox.setAttribute('id', `row${i + 1}-column${j+1}`); // Adds a new id to the box
            aSingleBox.addEventListener('mouseover', change => { // Adds event listener to change the div class when moused over.
                //aSingleBox.classList.add('activated');
                aSingleBox.setAttribute('style', `background-color: ${paintbrush}`);
            });

            verticalContainer.appendChild(aSingleBox); // add the box div to the horizontal container
            const documentDiv = document.querySelector('.theDiv'); // Grabs the div from the file to add it all 
            documentDiv.append(verticalContainer); // append the new box
        };
    };  
};

function changeColour() {
    let paintColour = document.querySelector('#colour-picker');
    paintColour = paintColour.value;

    const nodeOfBoxes = document.querySelectorAll('.new');
    const arrayOfBoxes = Array.from(nodeOfBoxes);
    arrayOfBoxes.forEach(element => {
        element.addEventListener('mouseover', changeAttribute => {
            element.setAttribute('style', `background-color: ${paintColour}`);
        });
    });
};

function rainbowMode() {
    let paintColour = document.querySelector('#colour-picker');
    paintColour = paintColour.value;

    const nodeOfBoxes = document.querySelectorAll('.new');
    const arrayOfBoxes = Array.from(nodeOfBoxes);
    arrayOfBoxes.forEach(element => {
        element.addEventListener('mouseover', changeAttribute => {
            element.setAttribute('style', `background-color: ${getRandomColour()}`);
        });
    });
};

function getRandomColour() {
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
    randomColour = colors[Math.floor(Math.random() * colors.length)];
    return randomColour;
};

// Clears the grid:
function clearGrid(width) {
    for (let x = 0; x < width; x++) {
        const targetElement = document.querySelector(`#vertical-container-${x + 1}`);
        targetElement.parentNode.removeChild(targetElement);
    };
};

// Function for the reset button:
function resetButton() {
    let reloadwidth = document.getElementById('mySlider');
    reloadwidth = reloadwidth.value;
    clearGrid(currentWidth);
    loadGrid(reloadwidth);
};

