// Introduction to Nums and maths in JS

const score = 400
console.log(score);

const balance = new  Number(100)
console.log(balance);
//console.log(balance.toString); // converted to string
console.log(balance.toString().length);  
console.log(balance.toFixed(3)); // after dot numbers

const otherNumber = 23.86969

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); //en-IN for converting it into indian form.

// ********** Maths ***********

console.log(Math);
console.log(Math.abs(-5)); // convert negative to positive value.
console.log(Math.round(5.50)); //(output 6) gives round value.
console.log(Math.ceil(4.2)); //(output 5) if some more than it will choose highest only.
console.log(Math.floor(5.9)); //(output 5if after point highest value than also it will choose lowest value.

console.log(Math.min(5,6,3,2,8,95,2,1,0));
console.log(Math.max(4,5,3,2,1,9,8,7,6,10));

console.log(Math.random()); // give values between 0 and 1
console.log(Math.random()*10);  
console.log((Math.random()*10) + 1); // minimum number 1
console.log(Math.floor(Math.random()*10) + 1); // floor will round off the value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
// from the above statement it is clear that minimum value will be 10 and it can be greater also.
