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
const volumeBar = document.querySelector(".input-volume");
const volumeButton = document.querySelector(".btn-volume");
const fullscreenButtom = document.querySelector(".btn-fullScreen");
const videoWrapper = document.querySelector(".video-wrapper");
const videoSpeedInfo = document.querySelector(".speedInfo");
let speedMessageTimer;
playButton.addEventListener("click", togglePlay);
middlePlayButton.addEventListener("click", togglePlay);

function swipeMainVideo() {
  videoPlayer.slideTo(videoSwiper.realIndex + 1, 300);

  currentVideo.removeEventListener("play", updateButton);
  currentVideo.removeEventListener("pause", updateButton);
  currentVideo.removeEventListener("click", togglePlay);
  currentVideo.removeEventListener("timeupdate", handleProgress);
  currentVideo.load();
  middlePlayButton.style.display = "block";
  playButton.style.backgroundImage = `url(./assets/svg/btn-play.svg)`;
  progressBar.value = 0;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #c4c4c4 0%, white 100%)`;

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

function changeVolume(e) {
  let changeValue = e.offsetX / volumeBar.offsetWidth;
  changeValue = parseFloat(changeValue.toFixed(1));
  currentVideo.volume = changeValue;
  volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
    changeValue * 100
  }%, #c4c4c4 ${changeValue * 100}%, white 100%)`;
  volumeBar.value = changeValue;
  console.log(currentVideo.volume);
  if (currentVideo.volume === 0) {
    volumeButton.style.backgroundImage = `url(./assets/svg/btn-volume-muted.svg)`;
  } else {
    volumeButton.style.backgroundImage = `url(./assets/svg/btn-volume.svg)`;
  }
}

function toggleVolume() {
  if (currentVideo.muted) {
    currentVideo.muted = false;
    this.style.backgroundImage = `url(./assets/svg/btn-volume.svg)`;
  } else {
    currentVideo.muted = true;
    this.style.backgroundImage = `url(./assets/svg/btn-volume-muted.svg)`;
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    videoWrapper.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function keyControl(e) {
  switch (e.code) {
    case "Space":
      e.preventDefault();
      togglePlay();
      break;
    case "KeyM":
      toggleVolume.call(volumeButton);
      break;
    case "KeyF":
      toggleFullScreen();
      break;
    case "Comma":
      if (e.shiftKey) {
        if (currentVideo.playbackRate >= 0.5) {
          currentVideo.playbackRate = currentVideo.playbackRate - 0.25;
        }
        callSpeedMessage();
      }
      break;
    case "Period":
      if (e.shiftKey) {
        if (currentVideo.playbackRate <= 1.75) {
          currentVideo.playbackRate = currentVideo.playbackRate + 0.25;
        }
        callSpeedMessage();
      }
      break;
  }
}

function callSpeedMessage() {
  clearTimeout(speedMessageTimer);
  videoSpeedInfo.textContent = `${currentVideo.playbackRate}x`;
  videoSpeedInfo.classList.add("active");
  speedMessageTimer = setTimeout(
    () => videoSpeedInfo.classList.remove("active"),
    500
  );
}

videoSwiper.on("realIndexChange", swipeMainVideo);
document.addEventListener("keydown", keyControl);

currentVideo.addEventListener("play", updateButton);
currentVideo.addEventListener("pause", updateButton);
currentVideo.addEventListener("click", togglePlay);
currentVideo.addEventListener("timeupdate", handleProgress);

volumeButton.addEventListener("click", toggleVolume);
fullscreenButtom.addEventListener("click", toggleFullScreen);

let isVolumeMousedown = false;
volumeBar.addEventListener(
  "mousemove",
  (e) => isVolumeMousedown && changeVolume(e)
);
volumeBar.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isVolumeMousedown = true;
});
window.addEventListener("mouseup", () => (isVolumeMousedown = false));

let isProgressMousedown = false;
progressBar.addEventListener(
  "mousemove",
  (e) => isProgressMousedown && rewind(e)
);
progressBar.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isProgressMousedown = true;
});
window.addEventListener("mouseup", () => (isProgressMousedown = false));
