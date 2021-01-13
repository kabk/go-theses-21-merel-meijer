
const SCROLLSLIDE = document.querySelector('.scroll-slider__slide');

// scrolloffset should be the width of the slide
const SCROLLOFFSET = SCROLLSLIDE.offsetWidth;

const SCROLLSLIDERWRAPPER = document.querySelector('.scroll-slider__wrapper');

const NAVIGATENEXT = document.querySelector('.scroll-slider__navigation-item--next');
const NAVIGATEPREV = document.querySelector('.scroll-slider__navigation-item--prev');

window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("toptexts2").style.display = "block";
    } else {
        document.getElementById("toptexts2").style.display = "none";
    }
}
