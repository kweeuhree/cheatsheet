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
let buttons = document.getElementsByClassName('attn-btn');

// Loop through buttons  
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { // add an on-click function to each button
        changeButton(this.id); // pass the id of the clicked button to our function
    });
}
