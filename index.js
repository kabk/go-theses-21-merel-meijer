
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

const SCROLLSLIDE = document.querySelector('.scroll-slider__slide');

// scrolloffset should be the width of the slide
const SCROLLOFFSET = SCROLLSLIDE.offsetWidth;

const SCROLLSLIDERWRAPPER = document.querySelector('.scroll-slider__wrapper');

const NAVIGATENEXT = document.querySelector('.scroll-slider__navigation-item--next');
const NAVIGATEPREV = document.querySelector('.scroll-slider__navigation-item--prev');

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
