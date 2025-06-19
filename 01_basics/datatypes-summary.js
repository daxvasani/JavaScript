/*
     datatypes divivded into 2 types 
1. Primitive
-> Call by value
-> 7 types:- String,Number,Boolean,Null,Undefined,Symbol,BigInt

2. Non-Primitive(Refernce Type)
-> Array,Objects,Functions
*/

// Primitive TYPE
const score = 100
const scorevalue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // symbol Example

const bigNumber = 34565435762654841890182000654356754n // bigInt example

// Non-Primitive TYPE

const heros = ["Batman","Spiderman","Santa"] 
//array=[] object={}
let myObj = { 
    name:"dax",
    age: 19
}

// Function Declaration
const myFunction = function(){
    console.log("Hello");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scorevalue);
console.log(typeof score);

console.log(typeof myFunction); // function will be return as function only

// ******************* Memory ********************
/*
Memory are of 2 types
1.Stack(primitive)(copied value)
2.Heap(non-primitive)(original value)
*/

let myYoutubeName = "daxvasani"
let anotherName = myYoutubeName
console.log(anotherName);
anotherName = "chai aur code"
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "xyz@yahoo.com", 
    upi: "xyz@bob"
}

let userTwo = userOne
userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
