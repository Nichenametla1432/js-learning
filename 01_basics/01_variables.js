const  accountId = 144553;
let accountEmail = "venkat@google.com";
var accountPassword = "1234"; 
accountCity = "Yerraguntla";

// accountId = 1234; // not allowed 

accountEmail = "sv@goole.com";
accountPassword = "2211221"
accountCity = "banglore"
/*
prefer not to use 
because  of issues in block scope and functional scope
*/
console.log(accountCity);
console.log(accountId);
console.table([accountEmail,accountPassword, accountCity]);