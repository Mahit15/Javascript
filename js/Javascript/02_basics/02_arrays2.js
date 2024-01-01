const clones = ["rex", "cody", "fives"]
const jedi = ["kenobi", "anakin", "yoda"]

// clones.push(jedi)
// console.log(clones);
// console.log(clones[3][1]);


// const newArr = clones.concat(jedi)
// console.log(newArr);

const all = [...clones, ...jedi] //spread operator - "spreads out" each value
// console.log(all);

const another_arr = [0, 1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11]]]

const usable_anotherArr = another_arr.flat(Infinity) //combines all subarrays into one array upto given depth argument
console.log(usable_anotherArr);

console.log(Array.isArray("Mahit")); //checks if given argument is array
console.log(Array.from("Mahit")); //converts into array
console.log(Array.from({name: "mahit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //creates array of given elements
