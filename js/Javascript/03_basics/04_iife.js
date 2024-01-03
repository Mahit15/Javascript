// Immediately Invoked Function Expressions (IIFE)

//named IIFE function
(function test(){
    console.log("DB connected");
})(); // need to place ; to end line as js doesn't know when to end the context
//first parentheses are for definition, second are for call, we are immediately calling the function as it is defined

//unnamed IIFE arrow function
( (name) => {
    console.log(`${name} connected`);
})("DB2"); //to pass arguments, pass them in the second parentheses
