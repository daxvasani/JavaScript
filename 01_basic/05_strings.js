// // strings can be denoted in double qout as well
// // as single qout ( '', "")

// "hello" + "world"
// 'hello world'

// const name = "hello "
// const name1 = "user! "
// console.log(name+name1+"Welcome back!"); // too outdated

// const sen1 = "Dax"
// const sen2 = "Vasani"
// console.log(`Hello my name is ${sen1} and my surename is ${sen2}.`);

const gameName = new String('gta-V-pc-game') // Another way of declaring a string
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-1,0) // doubt
console.log(anotherString);

const newStringOne = '   dax    '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://googl%20e.com"
console.log(url.replace('%20',''));
console.log(url.includes('com'));

console.log(gameName.split('-'));
