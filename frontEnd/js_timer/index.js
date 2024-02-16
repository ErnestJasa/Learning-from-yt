const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");
const timerElement = document.getElementById("timer");
let interval;
let time;
let timeLeft = 0;

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return formattedTime;
}

function updateTimer() {
  const formattedTime = formatTime(timeLeft);
  timerElement.innerHTML = formattedTime;
}

function convertFromMinutesToSeconds(time) {
  return time * 60;
}

function getTime() {
  let time = Number(prompt("Enter time in minutes: ", ""));
  const timeInSeconds = convertFromMinutesToSeconds(time);
  timerElement.innerHTML = formatTime(timeInSeconds);
  return timeInSeconds;
}

function startTimer() {
  if (timeLeft === 0) {
    time = getTime();
    timeLeft = time;
  }
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = time;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = time;
  updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
