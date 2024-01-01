//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Mahit" ,
    "full Name": "Mahit Singh", //cant access this with dot operator
    [mySym] : "mykey1", //syntax for declaring symbol in object, if no [] it counts as string
    age: 18 ,
    location: "Delhi" ,
    email: "mahit@google.com" ,
    isLoggedIn: false ,
    lastLogin: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); //jsUser[email] doesnt work as variable "email" is stored as string
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "mahit@yahoo.com" //overriding 
// Object.freeze(jsUser) //prevents change in object properties
jsUser.email = "mahit@youtube.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greetingTwo());
