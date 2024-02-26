This is a simple HTML, CSS and JavaScript page. 

The content is a cheatsheet to Project Management lectures.

Bordering each element while aligning helps me to grasp CSS flexbox.

In 'Nine Areas of Attention' section each Attention Button is listening for a click and onclick event triggers a function that will change state of each button. I am using a custom <code><q>data-clicked</q></code> attribute to pass id of clicked button into a function that will change <code>.innerHTML</code> of the clicked button.

In the section about Issues and Risks JavaScript is listening for <code>'mouseenter'</code> and <code>'mouseleave'</code> events changing background color to more color and back.

Functions <code>showOverlay</code> and <code>removeOverlay</code> show additional information on click of a clickable element in sections 'Project Management', 'Software Development Life Cycle' and 'Software Testing Life Cycle'.<br>
<code>showOverlay</code> function takes two parameters: id of a clicked element and id of the element additional information is being inserted into.<br>
<code>removeOverlay</code> function takes three parameters: insert element id, overlay id and id of original title of <code>div</code>.


The page is being actively updated.