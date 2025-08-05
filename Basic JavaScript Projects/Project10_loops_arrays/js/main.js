function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X <= 11) {
        Digit += "<br>" + X;
        X++;

    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums","Piano", "Bass", "Violin","Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cats").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);