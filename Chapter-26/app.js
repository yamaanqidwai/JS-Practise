// finding average of numbers in an array
var scores = [1, 2, 3, 3, 4, 5, 4, 2, 1, 4, 5, 5, 5, 4, 3, 5, 2, 1];
let total = 0;

// looping through an array and finding out the total
for (var i = 0; i < scores.length; i++) {
  total += scores[i];
}

// finding average
let scoreAvg = total / scores.length;

// rounding the average
scoreAvgRound = Math.round(scoreAvg);

// rounding up the average
scoreAvgCeil = Math.ceil(scoreAvg);

// rounding down the average
scoreAvgFloor = Math.floor(scoreAvg);

// displaying the average
console.log(scoreAvgRound);
console.log(scoreAvgCeil);
console.log(scoreAvgFloor);
alert(scoreAvgRound);
alert(scoreAvgCeil);
alert(scoreAvgFloor);
