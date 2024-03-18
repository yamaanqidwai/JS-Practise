// Flag is a variable which changes state when a change is recorded in a program
// Example

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
var question = "Enter the name of the item you would like to search";
var flag = false;

var item = prompt(question);
for (var i = 0; i < list.length; i++) {
  if (list[i] === item) {
    alert("Item is in list");
    flag = true;
    break; // If a match is found, the loop breaks therefore efficiency is increased
    // Break keyword breaks the loop when a condition is met
  }
}

if (flag === false) {
  alert("Item is not in list");
}

// Finding an array's length
console.log(list.length);

// Reading data or populating an array with the help of length function
var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Reading
for (var i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i]);
}

// populating array with upper case english alphabets instead of lowercase
for (var i = 0; i < alphabets.length; i++) {
  alphabets[i] = alphabets[i].toUpperCase();
}
