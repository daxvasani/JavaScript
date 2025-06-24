// Objects Part 2
// Object singleton or declare using constructor.

const wechatUser = new Object() // this is singleton object
console.log(wechatUser);

const wechattUser = {} // this is non-singleton object.
console.log(wechattUser);

// Both will return same output {}.

const twitterUser = {}

twitterUser.id = "123abc"
twitterUser.name = "dax"
twitterUser.isLoggedIn = true

console.log(twitterUser);

const regularUser = {
    email: "abc@yahoo.com",
    fullname: {
        userfullname: {
            firstname: "Dax",
            lastname: "Vasani"
        }
    }
} //  object inside an object

console.log(regularUser.fullname.userfullname.firstname);
// accessing elements of object inside an object.

// Combining Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) // {} is used for giving excat value, its an optinal value
// it is used when their are more number of arrays. It is good to use {}
console.log(obj4);

// another way of combining.
const obj5 = {...obj1, ...obj2} // using spread operator.
console.log(obj5);

const users = [
    {
        id: 1,
        email: "dax@google.com"
    },
    {
        id: 1,
        email: "dax@google.com"
    }
] // object inside array

users[1].email
console.log(twitterUser);

console.log(Object.keys(twitterUser)); // accessing the keys from the above object
console.log(Object.values(twitterUser)); // accessing the values from the above object
console.log(Object.entries(twitterUser)); // every key-value has created as an array 

console.log(twitterUser.hasOwnProperty('isLoggedIn'));
// checks if the value exist or not in certain object.

// ******************* Object de-structure and JSON API intro *********************

// The first thing to discuss is of de-structuring it can be of object or array

// Now lets see the de-structuring of object.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "dax"
}

// course.courseInstructor (just an syntax for accessing courseInstructor.)

const {courseInstructor} = course
console.log(courseInstructor); // here we can direct access it using courseInstructor.

const {coursename: nameofsub} = course
console.log(nameofsub); // we can also give alternate name as per our need

// the given below nameless object is nothing but JSON
// {
//     "name": "dax",
//     "coursename": "js in github",
//     "price": "free"
// }
// all the key and value are in string in JSON

[
    {},
    {},
    {}
]
// object inside array