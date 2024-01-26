function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username) // to hold the reference of a function inside another function, need to use .call
    // when .call is used, first parameter can be given as "this" so that the other function uses the context of this function instead of its own

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", " abc123")
console.log(chai);