const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

myButton.addEventListener("click", (event) => {
  if (myText.style.visibility === "hidden") {
    myText.style.visibility = "visible";
    myButton.textContent = "hide";
  } else {
    myText.style.visibility = "hidden";
    myButton.textContent = "show";
  }
});
