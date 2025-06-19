const marvelheros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvelheros.push(dc)
// console.log(marvelheros);
// output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// not a good option to do it will result in array in array

const allheros = marvelheros.concat(dc)
console.log(allheros);
// output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// concat will add two array and return a new array with merging 2 array

const allnewheros = [...marvelheros, ...dc] // ... represent speration of each elements
console.log(allnewheros); // this method is called spread operator 
// concat and spread are similar only but mostly this method is used by all for merging the array.

const anotherarray = [1,2,3, [4,5,6], 7 ,[6,7,[4,5]]]
console.log(anotherarray); // Output [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const realanotherarray = anotherarray.flat(Infinity) // () means how many depth we want
console.log(realanotherarray); // Ouput: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// flat returns a new array with all sub-array elements concatenated into it recursively
// up to the specified depth.

console.log(Array.isArray("helloworld")) // checks whether it is an array or not Output: false
console.log(Array.from("helloworld")) // convert into array Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// if from cant convert than it will return an emoty space []

console.log(Array.from({name: "heyyy"})); // output: []
// cant convert direct because one should tell that key should be array or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Output: [ 100, 200, 300 ]
// Returns a new array from a set of elements, set can be variable,number,arrays.
