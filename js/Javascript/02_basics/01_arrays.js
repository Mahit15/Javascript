const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4)

//Array methods

// myArr.push(6)  //adds at end
// myArr.pop() //removes from end

// myArr.unshift(8) // adds at start
// myArr.shift() // removes from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() //array to string
// console.log(typeof(newArr));

//slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //no change in original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) //manipulates original array
console.log(myn2);
console.log("C", myArr);