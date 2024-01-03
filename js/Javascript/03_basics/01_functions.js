

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("T");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2;
    //console.log("Mahit"); // wont print because function ends at return
}

const result = addTwoNumbers(3, 4)
// console.log(result);

function loginUserMessage(username = "sam"){ //sam becomes default value if nothing is passed
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Mahit"));
//console.log(loginUserMessage());


function calculateCartPrice(val1 ,val2, ...num1){ // ... is rest operator, function can return multiple arguments as array
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 600, 700));

const user = {
    username: "Mahit",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({ //directly defining the object in function call 
    username: "sam",
    price: 199
})

const myNewArray = [200, 400, 500, 100, 200]

function returnSecondValue(arr){
    return arr[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 100, 200]));