// Dates in JavaScript

let myDate = new Date()
console.log(myDate); // unreadable form
console.log(myDate.toDateString()); // readable form
console.log(myDate.toLocaleString()); // readable form + with time
console.log(typeof myDate); // date is an object

let myCreatedDate = new Date(2023, 0 ,23) // decalaration of date and months
console.log(myCreatedDate.toDateString()); // start with 0(jan) in jS

let myCreatedDateTime = new Date(2023,2,20,6,12,58) // declaration with time
console.log(myCreatedDateTime.toLocaleString());
