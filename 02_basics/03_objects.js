// Objects in JavaScript

// object can be define in 2 ways
// 1. Literal 2. Constructor
//Object.create // singleton
// Object Literals

// declaring symbol 
const mySymbol = Symbol("key1")

const JsUser = { // Object creation
    name: "Dax",
    age: 19,
    location: "vadodara",
    [mySymbol]: "mykey1", // if you want to use symbol use [] brackets
    isLoggedIn: false,
    lastLoginDays: ["Mon","tue"],
    "email": "daxvasani@yahoo.com"
}

console.log(JsUser.location); // accessing objects
console.log(JsUser["location"]); // another way of accessing objects
// console.log(JsUser.email); this cant access the email beacuse it is already mentioned as a string
//for this one should writec
console.log(JsUser["email"]); // another way of accessing objects
// console.log(JsUser.mySymbol); // this will work as a string not as a symbol
// console.log(typeof JsUser.mySymbol); Output: string

console.log(JsUser[mySymbol]) // accessing it as a key

JsUser.location = "Baroda" // like this way values can be overwrite

//Object.freeze(JsUser) // After using freeze any value cant be changed.
JsUser.age = 20
console.log(JsUser); // here you can clearly see that age will be 19 onlly it wont changed to 20.\

JsUser.greeting = function(){
    console.log("Hello JS User!");
}
console.log(JsUser.greeting());
// for running function i need to comment out the freeze line 33

// "" to ``(backticks) this is called string interpolation.

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
} // accessing elements of object
console.log(JsUser.greetingTwo());

// This was all about object literals.