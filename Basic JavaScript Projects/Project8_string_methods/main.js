// Converts a number to a string and displays it in an HTML element with ID "Numbers_to_string"
function string_Method() {
    var x = 182; // Declare a variable and assign it a number
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
    // Convert the number to a string and display it in the specified HTML element
}

// Formats a number to a specified precision (number of significant digits) and displays it
function precision_Method() {
    var x = 12938.301298737; // Declare a variable with a floating point number
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
    // Format the number to 10 significant digits and display it in the HTML element with ID "Precision"
}

// Extracts a part of a string using slice() and displays the result
function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);  
    // Extract characters from index 27 to 32 (33 is not included)
    document.getElementById("Slice").innerHTML = section;
    // Display the sliced portion of the sentence in the HTML element with ID "Slice"
}
