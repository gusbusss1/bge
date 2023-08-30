let timerInterval;
let time = parseInt(localStorage.getItem('timerValue')) || 3551;

function startTimer() {
  let min = 1;
  let max = 3;

  timerInterval = setInterval(function() {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    time += rnd;

    if (time >= 3990) {
      clearInterval(timerInterval);
      document.querySelector('#num').innerHTML = "Minting has stopped!";
    } else if (time > 4000) {
      clearInterval(timerInterval);
      document.querySelector('#num').innerHTML = "DON'T BE LATE!";
    } else {
      document.querySelector('#num').innerHTML = time;
      localStorage.setItem('timerValue', time);
    }
  }, 3000); // 5 second interval
}

window.addEventListener('load', function() {
  startTimer();
});