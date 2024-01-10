const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){ //accumulator and current value
  console.log(`Accumulator: ${acc}, Current value: ${currval}`);
  return acc + currval;
}, 0) //value after the comma will be initial value of accumulator

console.log(myTotal);
