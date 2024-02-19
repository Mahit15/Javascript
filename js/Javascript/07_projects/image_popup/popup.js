
// Throttling Function
const throttleFunction = (func, delay) => {
 
        // Previously called time of the function
        let prev = 0;
        return (...args) => {
            // Current called time of the function
            let now = new Date().getTime();
            // If difference between previously and currently called timings is greater than delay call the function again.
            if (now - prev > delay) {
                prev = now;
                // "..." is the spread operator here returning the function with the array of arguments
                return func(...args);
            }
        }
}
document.querySelector("#centre").addEventListener("mousemove",
throttleFunction((details) => {
    let div = document.createElement("div");
    div.classList.add('imagediv');
    
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src", "https://avatars.githubusercontent.com/u/115122762?v=4")
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power2,
        duration: .6
    });

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2
    });
    setTimeout(function(){
        div.remove();
    }, 1200)
}, 500)); // throttle function runs at an interval of 1500 ms