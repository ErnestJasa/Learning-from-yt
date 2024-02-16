const buttonElements = document.querySelectorAll("button");
const inputFieldElement = document.getElementById("result");
for (let button of buttonElements) {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearResult() {
  inputFieldElement.value = "";
}

function calculateResult() {
  inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(buttonValue) {
  inputFieldElement.value += buttonValue;
}
