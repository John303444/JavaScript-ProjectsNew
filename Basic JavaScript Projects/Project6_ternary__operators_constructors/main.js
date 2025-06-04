fubction Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementByIdElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short to ride." : "You are tall enough to ride!";
    document.getElementById("Ride").innerHTML = Can_ride;
}