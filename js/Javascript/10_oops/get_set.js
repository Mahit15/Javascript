class User {
    constructor(email, password){
      this.email = email
      this.password = password
    }
    // getter - for accessing a value outside of class
    // setter - for setting a value inside the class
    // _ is added to variable name to make sure constructor and setter dont clash for setting value
    get password(){
      return `${this._password} Password` // this will be returned if someone acceses "password"
    }
    //if getter is defined, setter has to be defined too
    set password(value){
      this._password = value
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
  }
  
  const user1 = new User("user1@gmail.com", "abcd")
  console.log(user1.email);
  console.log(user1.password);