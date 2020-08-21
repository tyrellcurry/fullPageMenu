let play = document.querySelector(".menu-btn");
let exit = document.querySelector("#exit");

let t1 = gsap.timeline({paused: true});

t1.to(".box", {duration: 1.2, width: '25%', ease: Power4.easeInOut});
t1.from(".nav ul li", {duration: 1, opacity: 0, y: 150, stagger: 0.25, ease: "back"});



t1.reverse();
$(document).on('click', '.menu-btn', function () {
    t1.reversed(!t1.reversed());
});

let title = document.querySelector(".title");

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false; 
menuBtn.addEventListener("click", () => {
    title.classList.add("fade");
    if(!menuOpen){
        menuBtn.classList.add("open");
        menuOpen = true;
    }
    else {
        title.classList.remove("fade");
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

