import { checkSessionStorage, priceRecount } from "./section-tickets";

const ticketBtn = document.querySelector(".buyBtn");
const select = document.querySelector("#popup-select");
const popup = document.querySelector(".popup");
const basicTicketsInput = document.querySelector(".basic-tickets-amount-popup");
let ticketTypeCost = 20;
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
    popupPriceRecount();
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

const ticketTypeInfo = document.querySelector(".info-type");
const costAmountInfoBasic = document.querySelector(".cost-info-amount-basic");
const costAmountInfoSenior = document.querySelector(".cost-info-amount-senior");
const oneTicketPriceBasic = document.querySelector(".one-ticket-price-basic");
const oneTicketPriceSenior = document.querySelector(".one-ticket-price-senior");
const ticketsSumBasic = document.querySelector(".tickets-sum-basic");
const ticketsSumSenior = document.querySelector(".tickets-sum-senior");
const totalCost = document.querySelector(".popup-total-cost");

function popupPriceRecount() {
  basicTicketsInputValue = sessionStorage.getItem("basicTicketsInputValue");
  seniorTicketsInputValue = sessionStorage.getItem("seniorTicketsInputValue");
  ticketTypeInfo.textContent = select.options[select.selectedIndex].text;
  costAmountInfoBasic.textContent = basicTicketsInputValue;
  costAmountInfoSenior.textContent = seniorTicketsInputValue;

  switch (sessionStorage.getItem("ticketType")) {
    case "permanent":
      ticketTypeCost = 20;
      break;
    case "temporary":
      ticketTypeCost = 25;
      break;
    case "combined":
      ticketTypeCost = 40;
      break;
  }

  oneTicketPriceBasic.textContent = ticketTypeCost;
  oneTicketPriceSenior.textContent = ticketTypeCost / 2;
  ticketsSumBasic.textContent = ticketTypeCost * basicTicketsInputValue;
  ticketsSumSenior.textContent = (ticketTypeCost / 2) * seniorTicketsInputValue;
  totalCost.textContent =
    ticketTypeCost * basicTicketsInputValue +
    (ticketTypeCost / 2) * seniorTicketsInputValue;
}

ticketBtn.addEventListener("click", updateInfo);

select.addEventListener("change", () => {
  sessionStorage.setItem("ticketType", `${select.value}`);
  popupPriceRecount();
});

popup.addEventListener("transitionstart", (e) => {
  if (e.target.classList.contains("popup")) {
    checkSessionStorage();
    priceRecount();
    popupPriceRecount();
  }
});
