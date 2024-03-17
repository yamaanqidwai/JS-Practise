/* 
    FOR LOOP 
    Syntax  ===>  for (var i = 0;i <= number;i++)

    > variable i holds the current loop counter          // that in the current case is 0
    > number holds the number of times the loop should run
    > i starts at 0 and increments by 1 each time the loop executes
    > the condition i <= number is true
    > the code inside the loop executes
    > the condition i <= number is false
    > the code inside the loop does not execute    
*/

var brothers = [];

for (var i = 0; i < 4; i++) {
  brothers[i] = prompt("Enter your brother's name");
}

var cities = []

for (var i = 0; i < 4; i++) {
  cities[i] = prompt("Enter your city");
}