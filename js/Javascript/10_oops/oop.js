const user = {
    username: "mahit",
    loginCount: 9,
    signedIn: false,

    getUserDetails: function(){
        //console.log("Got user details");
        //console.log(`Username: ${this.username}`) // refers to username of the current context (user)
        console.log(this); // prints the current context
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); //no current global context, if run in browser, it returns a window and other contexts

// "new" keyword allows to create a new instance
function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greetings = function(){
        console.log(`Hello ${this.username}`);
    }
    
    // return this // no need to return this as it is implicitly returned
}

const userOne = new User("mahit", 3, true)

const userTwo = new User("programmer", 4, false) //without new keyword it overrides userOne
console.log(userOne.constructor);
console.log(userTwo);