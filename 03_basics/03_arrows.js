// This keyword and Arrow in JavaScript

const user ={
    username: "dax",
    age: 19,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website` ); // this.username means current context
    }

}
user.welcomeMessage()
user.username = "sam" // sam is the context
user.welcomeMessage() // here contect has been changed

console.log(this); // when in node environment this refers to {}(empty object)

function one(){
    let username = "dax"
    console.log(this.username);
} // this cant be used in functions it can be used in objects.
one() // output: undefined

const two = function(){
    let username = "dax"
    console.log(this.username);
} // this also will return undefined
two()

const three = () => {
    let username = "dax"
    console.log(this.username);
} 
three()// output: undefined

// basic arrow declaration
// () => {}

const addtwo = (num1, num2) => { // if using {} it is complusory to return keyword
    return num1+num2
} // explicit return
console.log(addtwo(1,1)); // basic arrow function example

const addthree = (num1,num2,num3) => num1+num2+num3 // this is called implicit return function
console.log(addthree(1,1,1)) 
    
const addfour = (num1,num2,num3,num4) => (num1+num2+num3+num4) // when using () no need to write return statement  
console.log(addfour(1,1,1,1)) // implicit return