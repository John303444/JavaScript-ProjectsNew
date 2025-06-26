function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 12938.301298737;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}