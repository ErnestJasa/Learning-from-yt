let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

buttons.forEach((button) => {
  button.textContent += "🧨";
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(205, 100%, 70%)";
  });
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
  });
});

const newButton = document.createElement("button");
newButton.textContent = "new button";
newButton.classList = "myButtons";
document.body.appendChild(newButton); // it doesn't get added to the existing buttons list

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons"); // to update the list when an element gets removed, need to select it again
  });
});
