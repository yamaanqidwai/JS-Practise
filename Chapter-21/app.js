// Usage of upper and lower case functions
var list = [
  "oil",
  "tomatoes",
  "flour",
  "rice",
  "lemon",
  "shampoo",
  "razer",
  "keyboard",
];
var found = false;
var guess = prompt("Guess what is in the list?");

for (var i = 0; i < list.length; i++) {
  if (guess.toLowerCase === list[i]) {
    alert("Correct! " + guess.toUpperCase + " is in the list");
    found = true;
    break;
  }
}
if (found === false) {
  alert("Wrong!");
}

// The user could have entered in any way he wanted but we had stored our 
// data in lowercase so turning the input into lower case seemed the only option
// Also, output is in uppercase just to show the usage of uppercase function