let rect = document.querySelector("#centre");

rect.addEventListener('mousemove', function(position){
  let rectLocation = rect.getBoundingClientRect();
  let mouseInRect = position.clientX - rectLocation.left;
  if(mouseInRect < rectLocation.width / 2){

    let red = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, mouseInRect);
    gsap.to(rect, {
      backgroundColor: `rgb(${red}, 0, 0)`,
      ease: Power4,
    });
  } else if(mouseInRect > rectLocation.width / 2){
    let blue = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, mouseInRect);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blue})`,
      ease: Power4,
    }); 
  }
})

rect.addEventListener("mouseleave", function(){
  rect.style.backgroundColor = "white";
  gsap.to(rect, {
    backgroundColor: "white"
  })
})
