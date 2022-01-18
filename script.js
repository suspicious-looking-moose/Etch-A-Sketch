


function loadSixteenDiv() {  //CALLS THE CREATE DIV FUNCTION * 16 AND ADDS TO '.theDiv'
    for (let i = 0; i < 2; i++) {

        const bodyContain = document.querySelector('.vertical-container')
        const container = document.createElement('div');
        container.setAttribute('id', `container-no${i + 1}`);
        container.classList.add('new-horiz-div'); 
        bodyContain.appendChild(container);

        /*for  (let i = 0; i < 5; i++) {
            const myDiv = document.createElement('div');
            myDiv.setAttribute('id', `div-no${i + 1}`);
            myDiv.classList.add('new'); 
            container.appendChild(myDiv);
        }*/
    };


};


loadSixteenDiv();

function loadGrid() {
    for (let i = 0; i < 5; i++) {
        const newContainer = document.querySelector('.vertical-container');
        const newDiv = document.querySelector('.horiz-1');
        newContainer.appendChild(newDiv);
        console.log(newDiv);
    };
};




