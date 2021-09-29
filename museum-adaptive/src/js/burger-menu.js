const header = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");
const body = document.querySelector("body");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav-link-top");

function toggleMenu() {
  if (!header.classList.contains("menuOpen")) {
    headerNav.style.transition = "all 0.8s, opacity 0s";
    body.classList.add("menuOpen");
    header.classList.add("menuOpen");
  } else {
    headerNav.style.transition = "all 0.8s";
    header.classList.remove("menuOpen");
    body.classList.remove("menuOpen");
  }
}

menuBtn.addEventListener("click", toggleMenu);
navLinks.forEach((item) =>
  item.addEventListener("click", () =>
    window.innerWidth <= 1024 ? toggleMenu() : ""
  )
);
document.addEventListener("click", (e) => {
  if (
    e.target != headerNav &&
    body.classList.contains("menuOpen") &&
    e.target != menuBtn
  ) {
    toggleMenu();
  }
});
