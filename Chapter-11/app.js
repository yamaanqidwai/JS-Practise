/*
  6 comparison operators
  x === y --->  is x equal to y
  x !== y --->  is x not equal to y
  x > y   --->  is x greater than y
  x < y   --->  is x less than y
  x >= y  --->  is x greater than or equal to y
  x <= y  --->  is x less than or equal to y
*/

// Example
// Simple program to ask name and then output a certain greeting for a specific person
var question = "What is your name?";
var name = prompt(question); // asking question in variable "question" and then storing input in "name"

if (name === "Micheal" + " " + "Storren") {
  // ===  -->  comparison operator  // comparing name and giving "that" greeting
  alert("Fuck you " + name + "\nHow was the retalion?");
} else {
  alert("Hello " + name);
}

// Example 2
var num = prompt("Enter a number");

if (num > 100) {
  alert(num + " is greater than 100");
} else if (num < 100) {
  alert(num + " is less than 100");
} else if (num === 100) {
  alert()(num + " is 100");
}

// // Example  3

var num2 = prompt("Enter a number between 1 and 100 inclusive");
Number(num2);

// Validation
for (var i = 0; i <= 10000000000000; i++) {
  if (num2 > 100) {
    alert(num2 + " is greater than 100");
    num2 = prompt("Enter number again");
  } else if (num2 < 1) {
    alert(num2 + " is less than 1");
    num2 = prompt("Enter number again");
  } else {
    alert(num2 + " is between 1 and 100");
    break;
  }
}
if (i < 10000000000000) {
  alert("It took you " + i + " number of tries to get it right");
} else {
  alert(i + "! You have finished the number of tries granted \nRefresh the page to refill your tries");
}
