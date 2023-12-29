//Date is an object in js
// js stores dates as number of milliseconds since 1 january 1970

let myDate = new Date();
// console.log(typeof(myDate));
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 1, 9) //yy, mm, dd, months start from 0
let myCreatedDate = new Date("05-12-2023")
// console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2023, 19, 4, 4, 3, 56) //yy, mm, dd, hour, minute, second
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //converts date to milliseconds for comparing
console.log(Math.floor(Date.now() / 1000)); //convert to seconds

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
//The day is `The day is ${newDate.getDay()} and the time is `

newDate.toLocaleString('default', { //can customize the format with arguments 
    weekday: "long",
})
