const html = document.querySelector("html");

// prevent smooth scrolling after page reload
document.addEventListener("DOMContentLoaded", () => {
  html.style.scrollBehavior = "smooth";
});
