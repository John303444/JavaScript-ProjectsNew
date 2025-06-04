let num = 123;
let str = String(num); // Explicitly convert number to string
console.log(str); // Output: "123"

document.write(2E310);
document.write(10>2);
console.log(10 > 2); // Output: true
document.write(10==10);
document.write(3==11);
x = 10;
y = 10;
document.write(x == y); // Output: true
document.write(5>2 && 10>4); // Output: true


function not_Function() {
    document.getElementById("not").innerHTML = !(5 > 10); // Output: true
}