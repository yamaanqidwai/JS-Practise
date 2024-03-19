{
  // TODO: Fix Issue
  // Code cannot detect or output wether the input has already been entered or not
}

var attempt = 5;

var arr = [];

for (var total = 0; total < 10; total++) {
  var matchFound = false;
  var re_entered = false;

  var input = prompt(
    "What are the top 5 cutest animal? \n" + attempt + " attempts left"
  );
  var lowerInput = input.toLowerCase();

  var pets = ["dog", "cat", "rabbits", "mouse", "hamster", "rat"];

  // Checking if input can be found in array
  for (var i = 0; i < 5; i++) {
    if (lowerInput === pets[i]) {
      matchFound = true;
      arr.push = lowerInput;
    }
  }
  // Checking if input is already entered
  for (var check = 0; check < arr.length; check++) {
    if (input === arr[check]) {
      re_entered = true;
    }
  }

  // Telling the user wether his answer is right or wrong
  if (matchFound === true && re_entered === false) {
    alert(input + " is in the top 5 cutest animal!");
  } else if (re_entered === true) {
    alert(input + " has already been entered");
  } else if (matchFound === false) {
    alert(input + " is not in the top 5 cutest animal!");
  }

  if (matchFound === false || re_entered === true) {
    attempt--;
    alert(attempt + " attempts left");
  }
}
