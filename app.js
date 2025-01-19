const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, 
    yValue = 0;
let rotateDegree = 0;

function update(cursorposition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speed; 
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotatespeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorposition - parseFloat(getComputedStyle(el).left)) * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${yValue * speedy}px) rotateY(${rotateDegree * rotatespeed}deg)`;
    });
}

update(0)

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2; 

    rotateDegree = (xValue / (window.innerHeight / 2)) * 20;

    update(e.clientX);
});  
