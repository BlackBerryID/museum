import Swiper from "swiper";
import "swiper/scss";
import { videoSwiper } from "./video-swiper";
const videoPlayer = new Swiper(".video-player", {
  loop: true,
  allowTouchMove: false,
});

let currentVideo = document.querySelector(".swiper-slide-active > video");
const middlePlayButton = document.querySelector(".video-player > .btn");
const playButton = document.querySelector(".control-panel > .btn-play");
const progressBar = document.querySelector(".input-progress");
playButton.addEventListener("click", togglePlay);
middlePlayButton.addEventListener("click", togglePlay);

function swipeMainVideo() {
  videoPlayer.slideTo(videoSwiper.realIndex + 1, 300);

  currentVideo.removeEventListener("play", updateButton);
  currentVideo.removeEventListener("pause", updateButton);
  currentVideo.removeEventListener("click", togglePlay);
  currentVideo.removeEventListener("timeupdate", handleProgress);

  currentVideo = document.querySelector(".swiper-slide-active > video");

  currentVideo.addEventListener("play", updateButton);
  currentVideo.addEventListener("pause", updateButton);
  currentVideo.addEventListener("click", togglePlay);
  currentVideo.addEventListener("timeupdate", handleProgress);
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
  if (currentVideo.currentTime === currentVideo.duration) {
    middlePlayButton.style.display = "block";
  }
}

function handleProgress() {
  const percent = (currentVideo.currentTime / currentVideo.duration) * 100;
  // prettier-ignore
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #c4c4c4 ${percent}%, white 100%)`;
  progressBar.value = percent;
}

function rewind(e) {
  let rewindTime =
    (e.offsetX / progressBar.offsetWidth) * currentVideo.duration;
  if (rewindTime <= currentVideo.duration) {
    currentVideo.currentTime = rewindTime;
  } else {
    currentVideo.currentTime = currentVideo.duration - 0.01;
  }
}

videoSwiper.on("realIndexChange", swipeMainVideo);

currentVideo.addEventListener("play", updateButton);
currentVideo.addEventListener("pause", updateButton);
currentVideo.addEventListener("click", togglePlay);
currentVideo.addEventListener("timeupdate", handleProgress);

let isMousedown = false;
progressBar.addEventListener("mousemove", (e) => isMousedown && rewind(e));
progressBar.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isMousedown = true;
});
window.addEventListener("mouseup", () => (isMousedown = false));
