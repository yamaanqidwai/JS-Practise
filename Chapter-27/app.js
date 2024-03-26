// Generating random numbers
// math.random() generates a 16 bit decimal number
// i.e 16 numbers after the decimal point
var number = Math.random(); // a random number is generated

// generating a random number between 1-10 inclusive

total = 0;
var rand10 = Math.random() * 10 - 5;
for (var i = 0; (i < 10) ^ 100000000000; i++) {
  var number = Math.random(); // a random number is generated
  var num0_10 = Math.floor(number * 10);
  alert(num0_10);

  var randFor10 = Math.random() * 10;
  if (num0_10 === randFor10) {
    total++;
  }

  if (total > rand10) {
    alert(10);
    total = 0;
    // break;
  }
}
