const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const toggleEl = document.querySelector(".toggle");

const daysEl = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthsEl = [
    "January",
    "Faburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function setTime() {
    const date = new Date();
    const days = date.getDay();
    const months = date.getMonth();
    const dateCircle = date.getDate();
    const hours = date.getHours();
    const clockHours = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const timeEl = document.querySelector(".time");
    const dateEl = document.querySelector(".date");
    const ampm = hours >= 12 ? 'pm' : 'am';
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    clockHours,
    0,
    12,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;


  timeEl.innerHTML =   `${clockHours}: ${minutes <10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${daysEl[days]}, ${monthsEl[months]} <span class = "dayCircle">${dateCircle} </span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

setInterval(setTime, 1000);
