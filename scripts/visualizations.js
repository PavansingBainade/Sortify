/*
    Thank You! Made By: PAVANSING BAINADE
*/

// The sorting algorithm visualizer changes the background color and height of the array bars.
// We control the speed of this visualization based on user input.

var speed = 1000; // Default speed for visualization (1 second per update)

// Event listener to adjust the visualization speed when the speed input is changed
inp_aspeed.addEventListener("input", vis_speed);

// Function to change the speed of the sorting visualization
function vis_speed() {
    var array_speed = inp_aspeed.value; // Get the value from the speed input

    // Adjust the speed based on user input (1 is slowest, 5 is fastest)
    switch (parseInt(array_speed)) {
        case 1:
            speed = 1;    // Very fast
            break;
        case 2:
            speed = 10;   // Fast
            break;
        case 3:
            speed = 100;  // Medium
            break;
        case 4:
            speed = 1000; // Slow
            break;
        case 5:
            speed = 10000;// Very slow
            break;
    }

    // Update the delay time for visual changes (less delay means faster sorting visualization)
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);  
}

// Initial delay time for visualization, calculated based on array size and speed
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);  
var c_delay = 0; // Keeps track of the delay for each step of the visualization

// Function to update the height and background color of the bars during sorting
function div_update(cont, height, color) {
    window.setTimeout(function () {
        // Change the style of the bar (height and color) after a delay
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time); // Increase the delay for the next update
}

// Function to re-enable the buttons after sorting is complete
function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = []; // Reset button styles
            butts_algos[i].classList.add("butt_unselected"); // Make buttons clickable again

            butts_algos[i].disabled = false;  // Enable algorithm buttons
            inp_as.disabled = false;          // Enable array size input
            inp_gen.disabled = false;         // Enable generate button
            inp_aspeed.disabled = false;      // Enable speed input
        }
    }, c_delay += delay_time); // Wait for the delay to finish before enabling the buttons
}
