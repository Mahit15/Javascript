const score = 500
// console.log(score);
const balance = new Number(1000); //specifically defines it as a number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); 

const otherNum = 223.61741
// console.log(otherNum.toPrecision(4));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

// ******** Maths ********
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.14));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(1,5,3,7,2));
console.log(Math.max(1,54,6,4));
console.log(Math.random()); //returns value between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)); //to get random between 1 and 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //to get value between min and max, +1 is done to include the max number in the range 
