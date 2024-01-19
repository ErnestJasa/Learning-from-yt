const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    /*
        Executing JS from a string is an enormous security risk.
        It is far too easy for a bad actor to run arbitrary code when you use eval()
      */
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
