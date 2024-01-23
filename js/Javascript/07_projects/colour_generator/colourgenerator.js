//generating random colour

const randomColour = function(){
  const hex = "0123456789ABCDEF"
  let colour = '#'
  for(let i = 0; i < 6; i++){
      colour += hex[Math.floor(Math.random() * 16)]
      
  }
  return colour;
};

let intervalId;
const startColourChange = function(){
  
  function changeBgcolour(){
    document.body.style.backgroundColor = randomColour()
  }
  if(!intervalId){
    intervalId = setInterval(changeBgcolour, 1000)
  }
}
const stopColourChange = function(){
  clearInterval(intervalId);
  intervalId = null
}
document.getElementById("start").addEventListener('click', startColourChange);

document.getElementById("stop").addEventListener('click', stopColourChange);
