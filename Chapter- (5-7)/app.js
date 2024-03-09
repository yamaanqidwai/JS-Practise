var popular_number = 7;

console.log(popular_number);

// popular_number can also obtain its value through this way
var popular_number = 3 + 4;
// this  is because javascipt always does its math and then outputs the result

console.log(popular_number);

/*  
    Arithmetic opertators include:
        Addition       ---> +
        Subtraction    ---> -
        Multiplication ---> *
        Division       ---> /
        Modulus        ---> %      // (it returns remainder insteaaad of quotient)
*/

var num = 2;
var num2 = 10;

var sum = num + num2;
var take = num - num2;
var product = num * num2;
var div = num / num2;
var div2 = num2 / 2;
var mod = num2 % num;

console.log(sum);
console.log(take);
console.log(product);
console.log(div);
console.log(div2);
console.log(mod);

/*

-----------------------------------------------------------------------------
^                                 Chapter 6                                 ^
-----------------------------------------------------------------------------

*/

// incermenting variable by 1

num = 0; // initialisation

num = num + 1;
console.log("number = " + num);

// OR
num++;
console.log("number = " + num);

// OR
++num;
console.log("number = " + num);

// output 1
num = 0;
var temp = num++; //temp is assigned num's original value and then num is incremented
console.log("temp = " + temp);
console.log("number = " + num);

// output 2
num = 0;
var temp = ++num; //num is incremented and then temp is assigned num's value
console.log("temp = " + temp);
console.log("number = " + num);

// decrementing variable by 1

num = 0; //initialisation

num = num - 1;
console.log("number = " + num);

// OR
num--;
console.log("number = " + num);

// OR
--num;
console.log("number = " + num);

// output 1
num = 0;
var temp = num--; //temp is assigned num's original value and then num is decremented
console.log("temp = " + temp);
console.log("number = " + num);

// output 2
num = 0;
var temp = --num; //num is decremented and then temp is assigned num's value
console.log("temp = " + temp);
console.log("number = " + num);
