// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inner: ", a);
}
//console.log("Outer: ", a);
// console.log(b); //gives error
//console.log(c); //doesnt give error and redefines origincal c, this is why var isn't used

function one(){
    const username = "mahit"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //wont work

    two();
}
// one();

if(true){
    const username = "mahit"
    if(username == "mahit"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //error
}
//console.log(username); //error 

// ***************hoisting intro************

//below both are valid syntax for function

console.log(addOne(5));
function addOne(num){ //can access this before declaration
    return num + 1;
}


console.log(addTwo(5));
const addTwo = function(num){ //cannot access this before declaration 
    return num + 2;
}