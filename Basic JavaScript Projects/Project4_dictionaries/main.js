function my_Dictionary() {
    var Animal = {
        "Species": "Ferret",
        "Color": "black and tan",   // Info of the animal
    };
    document.getElementById("Dictionary").innerHTML = Animal.Species + " is the species of my pet ferret.";
}