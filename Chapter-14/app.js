// Nesting if statements

// Example 
// This code checks in which criteria the numbers fall and outputs accordingly
if (x > y) {
  if (x > 100 && y < 100) {
    alert("x is greater than 100 \ny is less than 100");
  }
  if (x === 100) {
    alert("x is equal to 100 \ny is less than 100");
  }
  if (x < 100) {
    alert("x is less than 100 \ny is also less than 100");
  }
}
