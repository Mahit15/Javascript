let score = null

console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score) // converts to number
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "30" -> 30
// "30abc" -> NaN (Not a Number)
// true -> 1, false -> 0
// null -> 0

let isLoggedIn = "mahit"

let booleanIsLoggedIn = Boolean(isLoggedIn) //converts to boolean   
console.log(booleanIsLoggedIn);
// 0 -> false, any other number -> 1
// "" -> false
// "mahit" -> true

let x = 30
let xString = String(x)
console.log(xString)