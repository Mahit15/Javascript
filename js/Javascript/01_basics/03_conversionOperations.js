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

// **** Operations **** //

let value = 3 
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " mahit"
let str3 = str1  + str2
console.log(str3);

console.log("1" + 2)
console.log("1" + 2 + 2) // treats 2 + 2 as a string because first data type is string
console.log(1 + 2 + "2") // treats 1 + 2 as a number because first data type is number

console.log(+true); // converts true to 1
console.log(+""); // false(0)


let gameCounter = 100
gameCounter++; // 101
console.log(++gameCounter); // 102