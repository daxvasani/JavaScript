// Array in JavaScript
// JS array are resizeable and can contain a mix of different data types.

const myArray = [1,2,3,4,5] // Normal declaration of Array
const myHeros = ["Shaktiman", "Batman", "Spiderman"]
const myArray2 = new Array(1,2,3,4)
console.log(myArray[2]); // Accessing Array Elements
console.log(myHeros[2]);

// Array Methods

myArray.push(6)
console.log(myArray);
// myArray.pop()

myArray.unshift(9) // Adds element at first position
console.log(myArray);
myArray.shift() // shifts the first element
console.log(myArray);

console.log(myArray.includes(2)); // check if element exist in the list or not
console.log(myArray.indexOf(2)); // access element from the list and give index of that element or else returns -1.

const newArray = myArray.join() // convert array into string

console.log(myArray); // in array form
console.log(newArray); // in string form

console.log("A", myArray);
const myn1 = myArray.slice(1,3) // in slice the last range wont be added in output
console.log(myn1);

console.log("B",myArray);
const myn2 = myArray.splice(1,3) // in splice the last range will be include in output and original array element are manipulated(the spliced
// element are removed from the original one.) 
console.log(myn2);
