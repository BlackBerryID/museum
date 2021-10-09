import {
  checkSessionStorage,
  ticketTypeCost,
  priceRecount,
} from "./section-tickets";

const ticketBtn = document.querySelector(".buyBtn");
const select = document.querySelector("#popup-select");
const popup = document.querySelector(".popup");
const basicTicketsInput = document.querySelector(".basic-tickets-amount-popup");
const seniorTicketsInput = document.querySelector(
  ".senior-tickets-amount-popup"
);
const popupButtons = document
  .querySelector(".popup")
  .querySelectorAll("button");
const popupInputButtons = document
  .querySelector(".popup-amount")
  .querySelectorAll("button");

popupButtons.forEach((item) =>
  item.addEventListener("click", (e) => e.preventDefault())
);
popupInputButtons.forEach((item) =>
  item.addEventListener("click", () => {
    sessionStorage.setItem(
      "basicTicketsInputValue",
      `${basicTicketsInput.value}`
    );
    sessionStorage.setItem(
      "seniorTicketsInputValue",
      `${seniorTicketsInput.value}`
    );
  })
);

let basicTicketsInputValue = sessionStorage.getItem("basicTicketsInputValue");
let seniorTicketsInputValue = sessionStorage.getItem("seniorTicketsInputValue");
let ticketTypeValue = sessionStorage.getItem("ticketType");

function updateInfo() {
  basicTicketsInputValue = sessionStorage.getItem("basicTicketsInputValue");
  seniorTicketsInputValue = sessionStorage.getItem("seniorTicketsInputValue");
  ticketTypeValue = sessionStorage.getItem("ticketType");
  if (basicTicketsInputValue) basicTicketsInput.value = basicTicketsInputValue;
  if (seniorTicketsInputValue)
    seniorTicketsInput.value = seniorTicketsInputValue;
  if (ticketTypeValue) {
    select.value = sessionStorage.getItem("ticketType");
  } else {
    select.value = "permanent";
  }
}

ticketBtn.addEventListener("click", updateInfo);

select.addEventListener("change", () =>
  sessionStorage.setItem("ticketType", `${select.value}`)
);

popup.addEventListener("transitionstart", (e) => {
  if (e.target.classList.contains("popup")) {
    checkSessionStorage();
    priceRecount();
  }
});
