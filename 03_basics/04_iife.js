// Immediately Invoked Function Expression (IIFE)

(function one (){
    // named IIFE
    console.log(`Database Connected`);
})(); // ; to end the current code

// ()()
// the first () is function definition
// the second () is execution call

// iife means the function which executes immediate.
// iife:- to remove global scope pollution variable or something.

( () => {
    // unamed IIFE
    console.log(`Database Connected Two`); 
}) () // using arrow function

( (name) => {
    console.log(`Database Connected Two ${name}`); 
}) ('dax') // used giving as arguement or by passing parameter.

// if using two 2 IIFE in one program you use ; after first IIFE