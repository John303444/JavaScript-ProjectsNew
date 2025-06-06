 var globalVar1 = "Hello";
   let globalVar2 = "JavaScript";
   const PI = 3.14;

   function myFunction() {
  let x = 10; // Local variable declared with let
  const y = 20; // Local constant declared with const
  var z = 30; // Local variable declared with var

  console.log(x); // Output: 10
  console.log(y); // Output: 20
  console.log(z); // Output: 30
}

function checkTime() {
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    console.log("Good morning!");
  } else if (currentTime < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
}