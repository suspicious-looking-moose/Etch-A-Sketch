function loadGrid(width) { // Takes grid width as variable.
    for (let j = 0; j < width; j++) {
        const verticalContainer = document.createElement('div');
        verticalContainer.classList.add('vertical-container');
        verticalContainer.setAttribute('id', `vertical-container-${j + 1}`);

        for (let i = 0; i < width; i++) {
            const aSingleBox = document.createElement('div'); // Creates the single box and adds the new box class to the element
            aSingleBox.classList.add('new'); // Adds the class of 'new' to the box created
            aSingleBox.setAttribute('id', `row${i + 1}-column${j+1}`); // Adds a new id to the box

            aSingleBox.addEventListener('mouseover', changeClass => { // Adds event listener to change the div class when moused over.
                aSingleBox.classList.add('activated');
            });

            verticalContainer.appendChild(aSingleBox); // add the box div to the horizontal container
            const documentDiv = document.querySelector('.theDiv'); // Grabs the div from the file to add it all 
            documentDiv.append(verticalContainer); // append the new box
        };
    };  
};

loadGrid(64); 



