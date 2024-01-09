// for of 

// ["", "", "", ""]
// [{}, {}, {}, {}] array of objects

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}
const greetings = "Hello World!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) { // writing just "key" will print the map like an array of key value pairs
  // console.log(key, '- ', value);
}
const myObj = {
  'game1' : 'CoD',
  'game2' : 'csgo'
}
for (const obj of myObj) {
  console.log(obj);
}
