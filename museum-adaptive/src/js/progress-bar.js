const progressBar = document.querySelectorAll(".input");

progressBar.forEach((item) =>
  item.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, white 100%)`;
  })
);

const inputProgress = document.querySelector(".input-progress");
const inputVolume = document.querySelector(".input-volume");

function setRangeInputPos() {
  if (window.innerWidth > 1024) {
    inputProgress.setAttribute("value", "54");
    console.log(window.innerWidth);
  } else if (window.innerWidth > 768) {
    inputProgress.setAttribute("value", "40");
  } else {
    inputProgress.setAttribute("value", "31");
  }
}

setRangeInputPos();
window.addEventListener("resize", setRangeInputPos);
