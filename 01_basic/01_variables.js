const accountId = 144553
let accountEmail = "dax@yahoo.com"
var accountPassword = "12345"
accountCity = "Mandvi"
let accountstate;
// accountId = 2 not allowed to change
/*
Pefer not to use var, because of issue in block scope 
and functional scope.
*/
accountEmail = "dax@gmail.com"
accountPassword = "6789"
accountCity = "Vadodara"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])