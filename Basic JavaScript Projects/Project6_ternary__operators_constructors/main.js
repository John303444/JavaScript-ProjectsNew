function outerFunction() {
    var height = document.getElementById("Height").value;

    function displayMessage(message) {
        document.getElementById("Nested_Function").innerHTML = message;
    }
    var resault = (height >= 52)
        ? "You are tall enough to ride."
        : "You are not tall enough to ride.";
    displayMessage(resault);//call the nested function    
}