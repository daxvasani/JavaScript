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

        1. Global Execution
            -> this
        2. Memoery Phase (line 29 to 31)
            val1->undefined
            val2->undefined
            addnum->defination
            result1->undefined
            result2->undefined
        3. Execution Phase (line 26 & 27)
            val1->10
            val2->5 
            addnum->new variable + execution thread
            (how many times this addnum will run in 3. that much time 2 step and 3 step will repeat)
*/

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

console.log(result1)
console.log(result2)

/*
 Call stack
 it follows LIFO 
 -> lifo - last in first out
 for ex:- firstly global execution will go in the stack than
 suppose fun1 goes than fun2 and than fun3 
 so now fun3 will come out first the other ones in the reverse order.
 that how stack works.
*/