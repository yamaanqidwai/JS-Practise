var question = "What is your hair color?";
var defaultColor = "black";

var hair_color = prompt(question, defaultColor);

if (hair_color === "black") {
  alert("Nice hair color");
} else {
  alert("Your hair color is " + hair_color + "?");
}

// qestionare

question = "What is the maximum number of pets one can have?";
var defaultAns = 1;

var answer = prompt(question, defaultAns);

console.log(typeof answer);

if (answer === "1") {
  alert("You prefer to embark on a conservative approach? Right!");
} else {
  alert("I prefer to keep 3");
}
