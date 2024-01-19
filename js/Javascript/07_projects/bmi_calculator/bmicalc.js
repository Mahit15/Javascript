const form = document.querySelector("form")
form.addEventListener('submit', function(event){
  event.preventDefault()
  const h = parseInt(document.querySelector("#height").value) //cannot use this outside of event listener as it will take the empty value before submit
  const w = parseInt(document.querySelector("#weight").value)
  const r = document.querySelector("#results")
  if(h === "" || h < 0 || isNaN(h)){
      r.innerHTML = `Enter a valid height ${h}`;
  } else if(w === "" || w < 0 || isNaN(w)){
    r.innerHTML = `Enter a valid weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000 )).toFixed(2)
    
    if(bmi < 18.6){
      r.innerHTML = `<span>${bmi}</span> 
      <span>Underweight</span>`
    } else if(bmi >= 18.6 && bmi <= 24.9){
      r.innerHTML = `<span>${bmi}</span> 
      <span>Normal</span>`
    } else {
      r.innerHTML = `<span>${bmi}</span> 
      <span>Overweight</span>`
    }
  }
});
