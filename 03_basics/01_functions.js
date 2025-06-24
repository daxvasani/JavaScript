// Functions in JavaScript

// Creation of basic function
// function is a keyword
function sayMyName(){
    console.log("D");
    console.log("a");
    console.log("x");
}
 /*
sayMyName // reference
sayMyName() // exclusion
*/

sayMyName()

function addTwoNumbers(number1, number2){ // number1, number2 are called parameters
    console.log(number1+number2)
} 

addTwoNumbers() // agrument-less Output: NaN
addTwoNumbers(1,2) // Output: 3
addTwoNumbers(1,"2") // Output: 12
// 1,"2" are called as argument.

const result = addTwoNumbers(5,5)
console.log("Result: ",result);
