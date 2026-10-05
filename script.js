/* =========================================
GSAP SETUP
========================================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================================
PAGE LOAD ANIMATION
========================================= */

const introTimeline = gsap.timeline({
defaults: {
ease: "power3.out"
}
});

/* Navbar */

introTimeline.from(".navbar", {
y: -30,
opacity: 0,
duration: 1
});

/* Eyebrow */

introTimeline.from(".eyebrow", {
y: 25,
opacity: 0,
duration: 0.8
}, "-=0.5");

/* Main heading */

introTimeline.from(".hero-title", {
y: 60,
opacity: 0,
duration: 1.2
}, "-=0.4");

/* Description */

introTimeline.from(".hero-description", {
y: 25,
opacity: 0,
duration: 0.8
}, "-=0.6");

/* Statistics */

introTimeline.from(".stat", {
y: 30,
opacity: 0,
duration: 0.7,
stagger: 0.15
}, "-=0.4");

/* Main visual */

introTimeline.from(".car", {
scale: 0.75,
opacity: 0,
y: 50,
duration: 1.3,
ease: "power3.out"
}, "-=0.8");

/* Scroll indicator */

introTimeline.from(".scroll-indicator", {
opacity: 0,
y: 20,
duration: 0.7
}, "-=0.5");

/* =========================================
COUNTER ANIMATION
========================================= */

document.querySelectorAll(".counter").forEach(counter => {

const finalValue = Number(counter.textContent);

const counterObject = {
    value: 0
};

gsap.to(counterObject, {

    value: finalValue,

    duration: 1.5,

    delay: 1.8,

    ease: "power2.out",

    onUpdate: () => {

        counter.textContent =
            Math.floor(counterObject.value);

    }

});

});

/* =========================================
SCROLL-DRIVEN CAR ANIMATION
========================================= */

const carTimeline = gsap.timeline({

scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 2,

    pin: false,

    markers: false

}

});

/*
The car moves according to
scroll progress.

This is NOT autoplay.

Scroll position controls
the animation.

*/

carTimeline

.to(".car", {

    x: 180,

    y: -30,

    rotation: 4,

    scale: 1,

    duration: 1

})

.to(".car", {

    x: -1800,

    y: 20,

    rotation: -4,

    scale: 0.9,

    duration: 1

})

.to(".car", {

    x: 80,

    y: 100,

    rotation: 2,

    scale: 0.65,

    opacity: 0.2,

    duration: 1

});

/* =========================================
HERO CONTENT SCROLL MOVEMENT
========================================= */

gsap.to(".hero-content", {

y: -100,

opacity: 0.25,

ease: "none",

scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 1.2

}

});

/* =========================================
BACKGROUND GLOW MOVEMENT
========================================= */

gsap.to(".glow-one", {

x: 180,

y: -100,

scale: 1.4,

ease: "none",

scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 2

}

});

gsap.to(".glow-two", {

x: -150,

y: -100,

scale: 1.3,

ease: "none",

scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 2

}

});

/* =========================================
SCROLL INDICATOR FADE
========================================= */

gsap.to(".scroll-indicator", {

opacity: 0,

scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "20% top",

    scrub: true

}

});