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

foods.push("Burger");
foods.push("Burge");
foods.push("Burg");
foods.push("Bruh");

foods;
console.log(foods);

// Run the index.html file and then use the debug console
// Click on blue lines to find out more stuff
