// creating promise
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function() {
        console.log("Async task complete");
        resolve() //call the resolve function to connect it with .then
    }, 1000)
})

// consuming promise; resolve is connected to .then, reject is connected to .catch
promiseOne.then(function(){
    console.log("Async task 1 promise consume/resolved");
})

//can also be done without storing promise in a variable and in a single part  
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2 complete");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async task 2 promise consumed/resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Mahit", github: "Mahit15"}) // passing object (data) as argument to resolve to use in .then   
    }, 1000);
})
promiseThree.then(function(user){ //parameter from resolve call comes in callback function of .then
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "mahit15", email: "tickler2k14"})
        } else {
            reject("ERROR")
        }
    }, 1000);
}) 
//chaining
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((myusername) => {  // .then can be chained
    console.log(myusername)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("promise either resolved or rejected")
}) //.finally is like a default, executes every time

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "12345678"})
        } else {
            reject("ERROR - JS went wrong")
        }
    }, 1000);
})
// promiseFive.then(function(user){
// }) // similar thing can be done with async await

async function consumePromiseFive(){ // async await cannot directly handle errors so we need to add try catch block
    try {
        const response = await promiseFive
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getUserInfo(){
//     try {
//         const response = await fetch('https://api.github.com/users/mahit15')
//         const data = await response.json() // type of data from fetch is string, converting it to json, this conversion takes time too, so we need to await it
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getUserInfo()

// doing the same thing with .then and .catch
fetch('https://api.github.com/users/mahit15')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("Error in fetch")
})