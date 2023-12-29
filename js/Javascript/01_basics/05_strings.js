const name = "mahit"
const rank = 5

console.log(name + rank); // old syntax
console.log(`Hello my name is ${name} and my rank is ${rank}`); // modern syntax, prefer this

const gameName = new String('The-Finals-2023')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //does not change original string
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-10, 4);

const newString1 = "     mahit "
console.log(newString1.trim()); //removes spaces

const url = "https://mahit.com/mahit%20singh" //space = %20 in ascii

console.log(url.replace('%20', '-'));
console.log(url.includes('mahit'))

console.log(gameName.split('-')) //splits string based on the argument
