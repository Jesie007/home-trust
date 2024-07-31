"use strict";
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".btn__header--left");
  const btnRight = document.querySelector(".btn__header--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${30 * (i - slide)}%)`)
    );
  };

  const nextSlide = function (slide) {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function (slide) {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slider();

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
