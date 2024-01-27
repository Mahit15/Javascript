class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ //static prevents access of the method/property to every object of the class
        return `123`
    }
}

const user1 = new User("user one")
// console.log(user1.createId()); // error, no access

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email 
    }
}

const youtube = new Teacher("yt", "yt@gmail.com")
// console.log(youtube.createId()); // error, no access
