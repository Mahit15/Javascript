// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);
}
console.log("Outer: ", a);
// console.log(b); //gives error
console.log(c); //doesnt give error and redefines origincal c, this is why var isn't used
