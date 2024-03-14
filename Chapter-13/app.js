/*
    Logical Operators

    && ==> AND
    || ==> OR
*/

// if x less than y and y greater than z or less than s then good   ://TASK

var perfect = "Good"

if (x < y && (y > z || y < s)) {
    alert(perfect)
}

// To remove ambiguity we us brackets and tell js using them which logical operators operate on certain conditions
