/*
    Thank You! Made By:- PAVANSING BAINADE
*/

/*
    Variable naming convention: 
    <object>_<action>_<objectname>; 
    Example -> Button_click_b1;
*/

// Get references to the important HTML elements for user input and display
var inp_as = document.getElementById('a_size'), array_size = inp_as.value; // Input for array size
var inp_gen = document.getElementById("a_generate"); // Button to generate a new array
var inp_aspeed = document.getElementById("a_speed"); // Input for sorting speed

// Get all the algorithm buttons
var butts_algos = document.querySelectorAll(".algos button");

// Arrays to store the size of each bar and the bar elements
var div_sizes = [];
var divs = [];
var margin_size; // Margin between the bars
var cont = document.getElementById("array_container"); // Container for displaying the array
cont.style = "flex-direction:row"; // Display the bars horizontally

// Function to generate a new array with random values
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

// Generates a new array with bars of random heights
function generate_array() {
    cont.innerHTML = ""; // Clear the previous bars

    // Create new bars based on the current array size
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10; // Random height
        divs[i] = document.createElement("div"); // Create a new bar (div)
        cont.appendChild(divs[i]); // Add the bar to the container

        margin_size = 0.1; // Set margin between bars
        // Style the bar: height is based on random value, width adjusts to fit all bars
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// Updates the array size and generates a new array when user changes the input
function update_array_size() {
    array_size = inp_as.value; // Update the array size
    generate_array(); // Create a new array with the updated size
}

// Automatically generate an array when the page loads
window.onload = update_array_size();

// Add event listeners to all algorithm buttons to start the sorting process when clicked
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo); // Run the chosen algorithm
}

// Disable buttons and inputs while sorting is in progress
function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = []; // Reset button classes
        butts_algos[i].classList.add("butt_locked"); // Lock the button

        butts_algos[i].disabled = true; // Disable algorithm buttons
        inp_as.disabled = true; // Disable array size input
        inp_gen.disabled = true; // Disable generate button
        inp_aspeed.disabled = true; // Disable speed input
    }
}

// Runs the selected sorting algorithm based on the button clicked
function runalgo() {
    disable_buttons(); // Disable inputs during sorting

    this.classList.add("butt_selected"); // Highlight the selected button

    // Check which sorting algorithm is selected and run the corresponding function
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}

/*
    Thank You! Made By:- PAVANSING BAINADE
*/
