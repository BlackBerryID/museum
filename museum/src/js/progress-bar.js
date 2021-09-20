const progressBar = document.querySelectorAll(".input");

progressBar.forEach((item) =>
  item.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, white 100%)`;
  })
);
