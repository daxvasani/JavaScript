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

let myCreatedSpecificDate = new Date("2025-06-18") // gives dates in specific manner (dd-mm-yy)
console.log(myCreatedSpecificDate.toLocaleString()); // month start with 01

let myTimeStamp = Date.now()
console.log(myTimeStamp); // this gives output in miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // converted into seconds

let newDate = new Date()
console.log(newDate); // get new random date
console.log(newDate.getDay()); // gives specific day or specific month from the certain date

newDate.toLocaleString('default', {
    weekday: "long"
}) // define an object and can give many parameters
