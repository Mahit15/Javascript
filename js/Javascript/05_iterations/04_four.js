// for in
// works for objects 

  const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
  }

  for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
  }

  const programming = ["java", "javascript", "python", "cpp"] 

  for(const key in programming){
   //  console.log(programming[key]); // keys of array is its indices starting from 0
  } 
  const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("IN", "India")

for(const key in map){
  console.log(key); //maps are not iterable 
}
