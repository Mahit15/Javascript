const user = {
    username: "mahit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this operator refers to current context
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this)

// function test(){
//     let username = "mahit"
//     console.log(this.username); //"this" context does not work in functions only in objects
// }
// test();

// const test = function(){
//     let username = "mahit"
//    console.log(this.username);
// }
// test();

const test = () => { //arrow function
    let username = "mahit"
    console.log(this.username);
}
test();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// no need for return keywork if definition is given in same line and curly braces aren't used
// const addTwo = (num1, num2) => num1 + num2; // implicit return
const addTwo = (num1, num2) => ({username: "mahit"}); // to return an object   
console.log(addTwo(3, 4));

// const myArr = [1,2,4,1,5]
// myArr.forEach()
