const ticketBtn = document.querySelector(".buyBtn");
const popup = document.querySelector(".popup");
const popupCloseItems = document.querySelectorAll(".close-popup");
console.log("popupCloseItems: ", popupCloseItems);

function openPopup() {
  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
}

ticketBtn.addEventListener("click", openPopup);
popupCloseItems.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target === item) {
      closePopup();
      e.preventDefault();
    }
  })
);
