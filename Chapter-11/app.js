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

