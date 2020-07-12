function remove() {
  document.getElementById("overlay").style.height = "0px";
  document.getElementById("overlay").style.transition = "1s";
  document.getElementById("overlay").style.height = "0px";
}

document.getElementById("menu").style.width = "0";

function show() {
  document.getElementById("menu").style.width = "100vw";
  document.getElementById("menu").style.transition = "0.6s";
  document.body.style.overflow = "hidden";
}
function hide() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.transition = "0.5s";
  document.body.style.overflow = "unset";
}

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});