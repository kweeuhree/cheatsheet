function changeButton(id) {
    // Get the clicked button by looking up its id
    let ourButton = document.getElementById(id);
    
    // Get the current state from the data-clicked attribute
    let clicked = ourButton.getAttribute('data-clicked') === 'true';

    if (!clicked) { // if the button was clicked
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
lowContainer.addEventListener('mouseenter', enterLowContainer);
lowContainer.addEventListener('mouseleave', leaveLowContainer);

// enterLowContainer function
function enterLowContainer() {
    const issuesDiv = document.querySelector('.issues-div');
    const risksDiv = document.querySelector('.risks-div');

    issuesDiv.style.backgroundColor = '#fcecd05d';
    risksDiv.style.backgroundColor = '#ffdbdb5d';
}

// leaveLowContainer function
function leaveLowContainer() {
    const issuesDiv = document.querySelector('.issues-div');
    const risksDiv = document.querySelector('.risks-div');

    issuesDiv.style.backgroundColor = 'transparent';
    risksDiv.style.backgroundColor = 'transparent';
}