window.addEventListener("mousemove", function(position){
  let rect = document.getElementById('rect');
  let rectWidth = rect.getBoundingClientRect().width / 2
  let xval = gsap.utils.mapRange(0, window.innerWidth, rectWidth + 150, window.innerWidth - 150 + rectWidth , position.clientX)
  // let xval = gsap.utils.mapRange(0, window.innerWidth, 150, window.innerWidth - 150, position.clientX)
  gsap.to('#rect',{
    left: xval + 'px',
    ease: Power4
  });
})
