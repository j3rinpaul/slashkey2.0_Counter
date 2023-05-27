// /* Set countdown date as a future date with a 24 hour format */
// // let countdownDate = new Date('01 January 2023 00:00')

// /* Set countdown date by adding hours to current date */
// let countdownDate = new Date().setHours(new Date().getHours() + 30)
// let isPaused = false;
// const pauseButton = document.getElementById("pause-button");

// const togglePause = () => {
//     isPaused = !isPaused;
//     pauseButton.innerHTML = isPaused ? "Resume" : "Pause";
//   };

// /* Set countdown date by adding minutes to current date */
// // let countdownDate = new Date().setMinutes(new Date().getMinutes() + 5);

// /* Set countdown date by adding seconds to current date */
// // let countdownDate = new Date().setSeconds(new Date().getSeconds() + 30);



// let timerInterval;

// const daysElem = document.getElementById("days"),
//     hoursElem = document.getElementById("hours"),
//     minutesElem = document.getElementById("minutes"),
//     secondsElem = document.getElementById("seconds"),
//     timer = document.getElementById("timer"),
//     content = document.getElementById("content");

// const formatTime = (time, string) => {
//     return time == 1 ? `${time} ${string}` : `${time} ${string}`;
// };

// const startCountdown = () => {
//     if (isPaused) return;
//     const now = new Date().getTime();
//     const countdown = new Date(countdownDate).getTime();

//     const difference = (countdown - now) / 1000;

//     if (difference < 1) {
//         endCountdown();
//     }

//     let days = Math.floor(difference / (60 * 60 * 24));
//     let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
//     let minutes = Math.floor((difference % (60 * 60)) / 60);
//     let seconds = Math.floor(difference % 60);

//     daysElem.innerHTML = formatTime(days, "");
//     hoursElem.innerHTML = formatTime(hours, "");
//     minutesElem.innerHTML = formatTime(minutes, "");
//     secondsElem.innerHTML = formatTime(seconds, "");
// };

// const endCountdown = () => {
//     clearInterval(timerInterval);
//     timer.remove();
//     content.classList.add("visible");
// };
// pauseButton.addEventListener("click", togglePause);

// window.addEventListener("load", () => {
//     startCountdown();
//     timerInterval = setInterval(startCountdown, 1000);
// });


let countdownDate = new Date().setHours(new Date().getHours() + 30);
let timerInterval;
let isPaused = false;
const pauseButton = document.getElementById("pause-button");

const daysElem = document.getElementById("days"),
  hoursElem = document.getElementById("hours"),
  minutesElem = document.getElementById("minutes"),
  secondsElem = document.getElementById("seconds"),
  timer = document.getElementById("timer"),
  content = document.getElementById("content");

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}`;
};

console.log("to edit the timer use setTime(hours) in console eg:setTime(60)")
const startCountdown = () => {
  if (isPaused) return;

  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysElem.innerHTML = formatTime(days, "");
  hoursElem.innerHTML = formatTime(hours, "");
  minutesElem.innerHTML = formatTime(minutes, "");
  secondsElem.innerHTML = formatTime(seconds, "");
};

const endCountdown = () => {
  clearInterval(timerInterval);
  timer.remove();
  content.classList.add("visible");
};

const setCountdownTime = (hours) => {
  countdownDate = new Date().setHours(new Date().getHours() + hours);
};

const togglePause = () => {
  isPaused = !isPaused;
  pauseButton.innerHTML = isPaused ? "Resume" : "Pause";
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

pauseButton.addEventListener("click", togglePause);

// Console commands
const setTimeCommand = (hours) => {
  setCountdownTime(hours);
  console.log(`Countdown time set to ${hours} hours.`);
};

// Register the console command
window.setTime = setTimeCommand;
