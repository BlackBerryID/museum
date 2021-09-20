import Swiper, { Pagination, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

Swiper.use([Pagination, Navigation]);

const swiper = new Swiper(".welcom-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const currentSlide = document.querySelector(".swiper-fraction-current");
const totalSlide = document.querySelector(".swiper-fraction-total");

totalSlide.innerHTML = `0${swiper.slides.length - 2}`;

swiper.on("slideChange", () => {
  currentSlide.innerHTML = `0${++swiper.realIndex}`;
});
