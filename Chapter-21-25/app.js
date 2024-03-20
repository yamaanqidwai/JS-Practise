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

/*

-----------------------------------------------------------------------------
^                                Chapter 22                                 ^
-----------------------------------------------------------------------------

*/

// Cutting/Extracting a part of string
/*
  string.slice(number1,number2)
  number1  ==>   from which character should the extraction begin with
  number2  ==>   to which character should the extraction end before
  eg:    in ohio, if i wish to extract hio, the number2 will be 5

  Also, length of string i.e number of letters extracted could be found by subtracting
  number1 from number2

  Note: First character of string has 0 index value just like an array
*/

var str = "Only in Ohio";
//         012345678911

// lower casing only the first character
alert(str.slice(0, 1).toLowerCase());

// Upper casing ohio
alert(str.slice(8, 12).toUpperCase());

// extracting 'in ohio'
alert(str.slice(5));
// since no cut off character is defined, it will start and end at the last character

// length function works on any array, string
// when length is used on an array, it lists the number of element present in that array
arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.length);
alert(str.length);

/*

-----------------------------------------------------------------------------
^                                Chapter 23                                 ^
-----------------------------------------------------------------------------

*/
