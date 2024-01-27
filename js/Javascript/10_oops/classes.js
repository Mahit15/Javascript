// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){ // no need for function keyword inside class
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const newUser = new User("issac", "issac@gmail.com", "1234")
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const newUser2 = new User("clark", "clark@gmail.com", "123456")
console.log(newUser2.encryptPassword());
console.log(newUser2.changeUsername());
