const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.map((num) => num + 10) //map automatically returns a value like filter
//unlike filter, it doesn't need a test to return values

//map and filter and other methods can be used together, called chaining
//result of first chain is passed to second chain/method
const newNums = myNums
                      .map((num) => num * 10)
                      .map((num) => num + 1)
                      .filter((num) => num > 40)

console.log(newNums);


