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
    //two different ways..
    // let result = number1+number2
    // return result
    return number1+number2
} 

addTwoNumbers() // agrument-less Output: NaN
addTwoNumbers(1,2) // Output: 3
addTwoNumbers(1,"2") // Output: 12
// 1,"2" are called as argument.

const result = addTwoNumbers(5,5)
console.log("Result: ",result);

function loginUserMessage(username){ // if you want to pass default value than just write: username = "dax" than if block will never excute.

    if(username === undefined){
        console.log("Please enter a username")
    }
    return `${username} just logged in!`
}
console.log(loginUserMessage("Dax"))
// if you do not pass any value it will return undefined.
console.log(loginUserMessage()) // here is the example of undefined.

function calculateCartPrice(val1, ...num1){ // ...  is called rest operator as well as spread operator.
    return num1
} // here ... is rest operator which merge elements into an array
// val1 carries 200 from the array, and other are printed
console.log(calculateCartPrice(200,400,500))

const user = {
    username: "daxvasani",
    age: 19
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user)
// it is not complusory to create object and than pass it.

handleObject({          // object creation
    username: "Dax",
    age: 19
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
// Same as object, We have seen array also
