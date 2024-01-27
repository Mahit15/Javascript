class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{ //teacher now has all functionality of User
    constructor(username, email, password){
        super(username) // super keyword makes it refer to parent's constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const pw = new Teacher("alakh", "pw@gmail.com", "abc")
pw.addCourse();

const unacad = new User("namo")
unacad.logMe();

console.log(pw instanceof User);