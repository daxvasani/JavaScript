// JavaScript
/*
JS is a single threaded.
JavaScript Execution Context:- (includes)
    ->Global Execution Context
    ->Function Execution Context
    ->Eval execution Context
    mainly first two are refered...

    {} -> memory creation phase or creation phase(first phase)
       -> Execution Phase (second phase)
*/

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)