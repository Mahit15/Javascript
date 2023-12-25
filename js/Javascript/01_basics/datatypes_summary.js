// Primitive data types

// 7 types : string, number, boolean, bigint, null, undefined, symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // gives false, which means not unique



// Reference data types (non primitive)
// Array, objects, functions
// typeof returns them all as object except function which is object function

const clones = ["rex", "cody", "fives"]
console.log(clones)

let myObj = {
    name: "mahit ",
    age: 18,
}
console.log(myObj.name + myObj.age);


const myFunction = function(){
    console.log("Hello");
}
myFunction();

