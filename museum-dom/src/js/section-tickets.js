const totalPrice = document.querySelector(".total-price");
const labelList = document.querySelectorAll(".tickets label");
const basicTicketsInput = document.querySelector(".basic-tickets-amount");
const seniorTicketsInput = document.querySelector(".senior-tickets-amount");
const ticketsInputButtonList = document
  .querySelector(".amount")
  .querySelectorAll("button");
let ticketTypeCost = 20;

labelList.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.tagName != "LABEL") return;
    if (e.target.classList.contains("active")) {
      return;
    } else {
      Array.from(labelList).map((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      if (e.target.classList.contains("permanent")) {
        ticketTypeCost = 20;
      } else if (e.target.classList.contains("temporary")) {
        ticketTypeCost = 25;
      } else if (e.target.classList.contains("combined")) {
        ticketTypeCost = 40;
      }
      priceRecount();
    }
  })
);

ticketsInputButtonList.forEach((item) =>
  item.addEventListener("click", priceRecount)
);

function priceRecount() {
  totalPrice.textContent =
    ticketTypeCost * basicTicketsInput.value +
    (ticketTypeCost / 2) * seniorTicketsInput.value;
}

priceRecount();
