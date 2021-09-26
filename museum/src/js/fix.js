const html = document.querySelector("html");

// prevent smooth scrolling after page reload
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    html.style.scrollBehavior = "smooth";
  }, 50);
});

const inputDate = document.querySelector(".input-date");
const inputTime = document.querySelector(".input-time");

// cheat validator to place placeholders in inputs type date and time after page load
document.addEventListener("DOMContentLoaded", function () {
  inputDate.setAttribute("placeholder", "Date");
});
document.addEventListener("DOMContentLoaded", function () {
  inputTime.setAttribute("placeholder", "Time");
});

const popupTransitionElements = document.querySelectorAll(".popup-transition");

// add transition to popup after page load (in order to not to see popup itself)
popupTransitionElements.forEach((item) =>
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      item.style.transition = "all 0.8s";
    }, 500);
  })
);

// this magical script doesn't let page jump right after reload
document.addEventListener("DOMContentLoaded", function () {
  var scrollpos = sessionStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function () {
  sessionStorage.setItem("scrollpos", window.scrollY);
};
