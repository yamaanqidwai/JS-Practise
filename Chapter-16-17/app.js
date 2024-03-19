// assigning value to Array when they are known
var brothers = ["Yamaan", "Faaiz", "Hamaad"];

// assigning value to Array when they are not known
var brothers = []; // Declaring an array -- brothers

// Assigning values to array
brothers[0] = "Yamaan";
brothers[1] = "Faaiz";
brothers[2] = "Hamaad";

// Checking Output
console.log(brothers);
console.log(brothers[0]);
console.log(brothers[1]);
console.log(brothers[2]);

// Assigning values to an array with gaps in its index
var brothers2 = [];

brothers2[0] = "Yamaan";
brothers2[3] = "Faaiz";
brothers2[5] = "Hamaad";

console.log(brothers2);
brothers2;

// by using quokka.to, you can see the result of code on right side
// and you just have to type the name of the var to see what it stores

// You can also overwrite the values
// Example

var foods = ["Biryani", "Tikka", "Pizza"];

foods;
console.log(foods);

foods[0] = "Burger"; //This line replaces the element stored in food[0] with Burger

foods;
console.log(foods);

// Deleting the last element of an array
var foods = ["Biryani", "Tikka", "Pizza"];

foods;
console.log(foods);

foods.pop();

foods;
console.log(foods);

// Adding an element to the end of an array
var foods = ["Biryani", "Tikka", "Pizza"];

foods;
console.log(foods);

foods.push("Burger", "Pasta", "Spagetti", "Ramen");

foods;
console.log(foods);

// Run the index.html file and then use the debug console
// Click on blue lines to find out more stuff

/*

-----------------------------------------------------------------------------
^                                Chapter 17                                 ^
-----------------------------------------------------------------------------

*/

// Removing element from the beginning of an array
var foods = ["Biryani", "Tikka", "Pizza"];

foods.shift();

foods;
console.log(foods);

// Adding element to the beginning of an array
var foods = ["Biryani", "Tikka", "Pizza"];

foods.unshift("Pasta", "Ramen");

foods;
console.log(foods);

/*
    SPLICE

    syntax  ===>  arrayName.splice(number1, number2, "element to be added", "element to be added")

    number1 ===>  from which index to start
    number2 ===>  how many element(s) are to get deleted *after* number1
*/

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.splice(1, 0, "1", "2");
myArray;
console.log(myArray);

// Adding Hydrogen to the array reactivitySeries and fixing the order of first 2 elements
var reactivitySeries = [
  "Sodium",
  "Potassium",
  "Calcium",
  "Magnesium",
  "Aluminium",
  "Zinc",
  "Iron",
  "Lead",
  "Copper",
  "Silver",
  "Platinum",
  "Gold",
];

reactivitySeries.splice(0, 2, "Potassium", "Sodium");

reactivitySeries;
console.log(reactivitySeries);

reactivitySeries.splice(7, 0, "Hydrogen");

reactivitySeries;
console.log(reactivitySeries);

// Removing Platinum from reactivitySeries, for O Level Syllabus
// doesn't require you to learn it

reactivitySeries.splice(11, 1);
reactivitySeries;
console.log(reactivitySeries);
