

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
console.log(loginUserMessage());