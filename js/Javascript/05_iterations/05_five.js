// for each

const coding = ["js", "python", "ruby", "java", "cpp"]

coding.forEach( function (item) {  //callback function has no name, "item" is the iterating variable, it automatically gets passed to the function everytime
   // console.log(item);  
}) 

coding.forEach( (item) => { //arrow function as callback function
  // console.log(item);
})

function printMe(item){
  console.log(item);
}
// coding.forEach(printMe) // function can be referenced in for each loop

coding.forEach((item, index, arr) => { //for each has access to every item, index and the whole array 
//  console.log(item, index, arr);
})

const myCoding = [ // array of objects
  {
    langName: "Javascript",
    langFileName: "js",
  },
  {
    langName: "python",
    langFileName: "py",
  },
  {
    langName: "java",
    langFileName: "java"
  }
]
myCoding.forEach( (item) => { //"item" becomes an object iterator
  console.log(item.langName);
})
