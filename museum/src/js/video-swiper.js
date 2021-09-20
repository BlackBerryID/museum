import Swiper, { Pagination, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

Swiper.use([Pagination, Navigation]);

const videoSwiper = new Swiper(".video-swiper", {
  navigation: {
    nextEl: ".video-swiper-button-next",
    prevEl: ".video-swiper-button-prev",
  },

  loop: true,

  pagination: {
    el: ".video-swiper-pagination",
    clickable: true,
  },

  slidesPerView: 3,
  spaceBetween: 42,
  allowTouchMove: false,
});
