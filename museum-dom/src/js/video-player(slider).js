import Swiper from "swiper";
import "swiper/scss";
import { videoSwiper } from "./video-swiper";
const videoPlayer = new Swiper(".video-player", {
  loop: true,
  // breakpoints: {
  //   769: {
  //     slidesPerView: 3,
  //     spaceBetween: 42,
  //   },

  //   300: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  // },
  allowTouchMove: true,
});

let currentVideo = document.querySelector(".swiper-slide-active > video");
const middlePlayButton = document.querySelector(".video-player > .btn");
const playButton = document.querySelector(".control-panel > .btn-play");
console.log("middlePlayButton: ", middlePlayButton);

function swipeMainVideo() {
  videoPlayer.slideTo(videoSwiper.realIndex + 1, 300);
  currentVideo = document.querySelector(".swiper-slide-active > video");
  console.log("currentVideo: ", currentVideo);
}

function togglePlay() {
  if (currentVideo.paused) {
    middlePlayButton.style.display = "none";
    currentVideo.play();
  } else {
    middlePlayButton.style.display = "block";
    currentVideo.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "play" : "pause";
  playButton.style.backgroundImage = `url(./assets/svg/btn-${icon}.svg)`;
}

videoSwiper.on("realIndexChange", swipeMainVideo);

playButton.addEventListener("click", togglePlay);
middlePlayButton.addEventListener("click", togglePlay);

currentVideo.addEventListener("play", updateButton);
currentVideo.addEventListener("pause", updateButton);
currentVideo.addEventListener("click", togglePlay);
