// const tinderUser = new Object() // singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "1337abc"
tinderUser.name = "Tarik"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "foo@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mahit",
            lastName: "Singh"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = Object.assign({}, obj1, obj2, obj3) //first argument is target, rest are source, use {} so sources are copied to empty object

const obj4 = {...obj1, ...obj2, ...obj3} //spread operator like array
//console.log(obj4); 

const users = [ //array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
// console.log(users[1].email); //accessing a property from array of objects

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns the keys as an array
console.log(Object.values(tinderUser)); //returns the values as an array
console.log(Object.entries(tinderUser)); //returns key-values as an array

console.log(tinderUser.hasOwnProperty('isLogged')); //to check if a property is present
