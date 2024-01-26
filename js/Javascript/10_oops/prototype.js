let myName = "mahit      "

// to make a method which will print the actual length of the string without using .trim
// console.log(myName.trueLength);

let myCharacters = ["jedi", "clones"]

let charWeapon = {
    jedi: "lightsaber",
    clones: "blaster",

    getJediPower: function(){
        console.log(`Jedi's weapon is ${this.jedi}`);
    }
}
Object.prototype.weapon = function(){
    console.log(`weapon is present in all objects`)
} 
// .weapon is now available for all objects, functions, arrays, string since we inserted the method at the top of the hierarchy (Object)
Array.prototype.sayHello = function(){
    console.log(`Hello`);
}
// .sayHello is only available to arrays, not objects, strings and functions 
charWeapon.weapon()
myCharacters.weapon()
// charWeapon.sayHello() // error
// myCharacters.sayHello()

// inheritance

const teacher = {
    youtube: true,
}
const user = {
    username: "mahit",
    mail: "123@gmail.com"
}

const teachingSupport = {
        isAvailable: true
}

const TASupport = {
    assignment: "Applied Maths",
    fullTime: true,
    __proto__: teachingSupport //now TASupport has access to properties of teachingSupport
}
// it can be done outside the declaration too

teacher.__proto__ = user
console.log(TASupport.isAvailable);

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher) // first parameter is given access to properties of second parameter
console.log(teachingSupport.youtube);

//going back to task on line 3

let anotherUser = "Mahit15      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUser.trueLength()

"computer".trueLength()

