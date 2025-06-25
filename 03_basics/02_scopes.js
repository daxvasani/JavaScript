// Scope in JavaScript
// three keywords:- let, var, const

if(true){
    let a = 10
    const b = 20
    var c = 30
}
{} // it is the scope 

// console.log(a);
// console.log(b);
console.log(c);
// 10,20 wont be printed as it is in loop but 30 is printed

// there are two types of scope 1. Global Scope  2. Block Scope
// DOM -  Document Object Model (HTML page manipulate through JavaScipt)

//  Nested Scope
function one(){
    const username = "dax"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // website scope range is till function two only(line 26) not outside the function
    two()
}
one()
//  the child function can access parent variable

console.log(addone(5))
function addone(num){
    return num + 1 
}
// Here before declaring function you can use it.

const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5))
// Here before declaring function you cant use it.