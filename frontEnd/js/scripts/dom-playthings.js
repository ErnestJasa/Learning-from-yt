function subscribe() {
  const subButton = document.querySelector(".js-sub-button");
  if (subButton.innerText === "Subscribe") {
    // .innerText ignores whitespace while innerHTML doesn't
    subButton.innerText = "Subscribed";
    subButton.classList.add("subbed-button");
  } else {
    subButton.innerText = "Subscribe";
    subButton.classList.remove("subbed-button");
  }
}

function calculateTotal() {
  event.preventDefault();
  costInputElement = document.querySelector(".js-cost-input");
  // multiplying a string by 1 in JS converts its type to number
  // could use Number() function as well
  let cost = costInputElement.value * 1;
  if (cost < 40) {
    cost += 10;
  }
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}
function handleKeyDown(event) {
  // fancy way of making enter press a submit, without having a form
  if (event.key === "Enter") {
    calculateTotal();
  }
}
