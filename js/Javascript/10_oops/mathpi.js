const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // function to check properties of objects
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //cannot override it

const tea = {
    name: "masala tea",
    price: 100,
    isAvailable: true,

    orderTea: function(){
        console.log("Tea not found")
    }
}
console.log(Object.getOwnPropertyDescriptor(tea, "name"));
// we can change writable, enumerable, configurable properties
// and write our own properties
Object.defineProperty(tea, "name", {
    //writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)){ //object.entries allows iteration of object
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`); // only iterate if the value is not a function, wont iterate on name because it is enumerable (line 22)
    } 
}


console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));