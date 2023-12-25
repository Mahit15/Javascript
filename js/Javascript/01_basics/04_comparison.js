console.log("2" >  1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
    Comparisons <, >, >=, <= work differently than equality check
    comparisons convert null to 0
    hence 0 > 0 is false and 0 >= 0 is true 
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
// equality check for undefined and null is defined such that they equal each other and dont equal anything else
console.log(undefined == null);

// === strictly checks value, not just values but data types too

console.log("2" === 2);



