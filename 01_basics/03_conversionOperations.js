let score = "55"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // we get it as Nan


let score1 = "33abc";
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // we get like Nan (Not a Number)

let score2 = null ;
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); //we get like 0 

let score3 = undefined;
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // we get like NaN

let score4 = true;
let valueInNumber4 = Number(score4); // if false means value becomes 0
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); // o/p :- true
console.log(booleanIsLoggedIn);

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1); // o/p :- false
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "venkat";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2); // o/p :- true
console.log(booleanIsLoggedIn2);

let marks = 98;
let stringMarks = String(marks);
console.log(stringMarks);
console.log(typeof stringMarks);

