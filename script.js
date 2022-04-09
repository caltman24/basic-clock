function updateClock() {
  const timerElement = document.getElementById("clock-time");
  const meridiemElement = document.getElementById("clock-meridiem");

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // if hours is 12 or greater, set meridiem to PM else AM
  let ampm = hours >= 12 ? "PM" : "AM";
  // if hours % 12 is 0, keep hours, else set it to 12
  hours = hours % 12 ? hours : 12;
  hours = hours > 12 ? hours - 12 : hours;
  // if minuntes is < 10 add a 0 in front else keep minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const fullTime = `${hours}:${minutes}`;
  timerElement.textContent = fullTime;
  meridiemElement.textContent = `${ampm}`;

  setTimeout(updateClock, 1000);
}
updateClock();
