function changeButton(id) {
    // Get the clicked button by looking up its id
    let ourButton = document.getElementById(id);
    
    // Initialize a notClicked state
    let notClicked = ourButton.getAttribute('data-clicked') === 'true';

    if (!notClicked) { // if the button was clicked
        ourButton.innerHTML = 'COMPLETED'; // update contents
        ourButton.setAttribute('data-clicked', 'true'); // update state
    } else {
        ourButton.innerHTML = ourButton.id; // update contents back to original, i use id 
        ourButton.setAttribute('data-clicked', 'false'); // update state
    }
}

// Get array of all buttons
const buttons = document.getElementsByClassName('attn-btn');

// Loop through buttons  
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { // add an on-click function to each button
        changeButton(this.id); // pass the id of the clicked button to our function
    });
}

// Define low container
const lowContainer = document.getElementById('low-container');
lowContainer.addEventListener('mouseenter', enterLowContainer); // listen for mouse to enter the container
lowContainer.addEventListener('mouseleave', leaveLowContainer); // listen for mouse to leave the container

// enterLowContainer function
function enterLowContainer() {
    const issuesDiv = document.querySelector('.issues-div');
    const risksDiv = document.querySelector('.risks-div');

    // update styling
    issuesDiv.style.backgroundColor = '#fcecd05d'; 
    risksDiv.style.backgroundColor = '#ffdbdb5d';
}

// leaveLowContainer function
function leaveLowContainer() {
    const issuesDiv = document.querySelector('.issues-div');
    const risksDiv = document.querySelector('.risks-div');

    // reverse styling
    issuesDiv.style.backgroundColor = 'transparent';
    risksDiv.style.backgroundColor = 'transparent';
}

// add raciMoveRight 

function raciMoveRight(id) {
    let raci = document.getElementById(id);
    raci.classList.add('raci-move-right');
}

// Listen for mouseover event in RACI section

document.getElementById('raci-div').addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('raci-description')) {
        raciMoveRight(event.target.parentElement.id);
    }
})


// Listen for a click on each of Phases, onclick show overlay
const phases = document.getElementsByClassName('phase');

for (let i = 0; i < phases.length; i++) {
    phases[i].addEventListener('click', function(event) {
        showOverlay(this.id, 'insert') // pass event target & overlay id
    })
}

// Listen for a click on each of sldcPhases, onclick show overlay

const sldcPhases = document.getElementsByClassName('sldc-phase');

for (let i = 0; i < sldcPhases.length; i++) {
    sldcPhases[i].addEventListener('click', function(event) {
        showOverlay(this.id, 'sldc-insert'); // pass event target & overlay id
    })
}

// Listen for a click on each of SLTC sequences, onclick show overlay

const sequences = document.getElementsByClassName('sltc-sequence');

for (let i = 0; i < sequences.length; i++) {
    sequences[i].addEventListener('click', function(event) {
        showOverlay(this.id, 'sltc-insert');
    })
}

// showOverlay function

function showOverlay(id, insertId) {

    // get the element that was clicked on and its class
    const clickedElement = document.getElementById(id);
    const classOfElement = clickedElement.classList[0];

    // get information section of clicked element
    const information = clickedElement.querySelector(`.${classOfElement}-information`);

    // get top title and insert
    const topTitle = document.getElementById(`${classOfElement}-title`);
    const insert = document.getElementById(insertId);

    // null top title content and show overlay
    topTitle.innerHTML = '';
    insert.classList.add(`${classOfElement}-overlay`);
    
    // display information
    insert.innerHTML = information.innerHTML;
}

// Remove overlay function

function removeOverlay(insertId, overlay, titleId) {

    // get insert id and title id
    const insert = document.getElementById(insertId); 
    const topTitle = document.getElementById(titleId);

    // get original top title
    const titleString = topTitle.getAttribute('data-info');
    
    insert.innerHTML = ''; // stop showing information
    insert.classList.remove(overlay); // remove overlay
    topTitle.innerHTML = titleString; // reset title
}








