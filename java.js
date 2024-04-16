let stats = document.querySelectorAll("#stats .container .box .number");
let sec = document.getElementById("stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= sec.offsetTop) {
    if (!started) {
      stats.forEach((element) => {
        scrollDown(element);
      });
    }
    started = true;
  }
};
function scrollDown(el) {
  let goal = el.dataset.goal;
  let scroll = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(scroll);
    }
  }, 2000 / goal);
}

let per = document.getElementById("our-skills");
let percent = document.querySelectorAll(
  "#our-skills .skills .skill .progress span"
);

window.onscroll = function () {
  if (window.scrollY >= per.offsetTop - 150) {
    if (!started) {
      percent.forEach((element) => {
        widthTo(element);
      });
    }
    started = true;
  }
};
let widthTo = function (el) {
  el.style.width = el.dataset.width;
};

let counter = setInterval(() => {
  let newDate = new Date("Dec 31 2023 23:59:59").getTime();
  let lastDate = new Date().getTime();
  let diffDate = newDate - lastDate;
  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
  document.getElementById("Days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("Minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("Seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
