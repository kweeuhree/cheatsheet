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


// add raciMoveRight using event delegation

function raciMoveRight(id) {
    let raci = document.getElementById(id);
    raci.classList.add('raci-move-right');
}

document.getElementById('raci-div').addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('raci-description')) {
        raciMoveRight(event.target.parentElement.id);
    }
})

// in phase container, listen if a phase was clicked on
// clicked phase sends id to a function
// function shows phases information in the title area

const phases = document.getElementsByClassName('phase');

for (let i = 0; i < phases.length; i++) {[
    phases[i].addEventListener('click', function(event) {
        showOverlay(this.id)
    })
]}

function showOverlay(id) {
    const phase = document.getElementById(id);
    const information = phase.querySelector('.information');
    const topTitle = document.getElementById('top-title');
    const insert = document.getElementById('insert');

    topTitle.innerHTML = '';
    insert.innerHTML = information.innerHTML;
    insert.classList.add('overlay');

}

function removeOverlay() {
    const overlay = document.querySelector('.overlay');
    const topTitle = document.getElementById('top-title');
    const insert = document.getElementById('insert');

    insert.classList.remove('overlay');
    insert.innerHTML = '';
    topTitle.innerHTML = "4 Phases Of Product Management";

}