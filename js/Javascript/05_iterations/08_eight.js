const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){ //accumulator and current value
//   console.log(`Accumulator: ${acc}, Current value: ${currval}`);
//   return acc + currval; //returned value becomes next value of accumulator
// }, 0) //value after the comma will be initial value of accumulator



const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "mobile app dev",
    price: 4999,
  },
  {
    itemName: "data science course",
    price: 9999,
  }
]

const price = shoppingCart.reduce( (acc, item) => (acc + item.price), 0);
console.log(price);