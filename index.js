const timerButton = document.getElementById('play-button');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const toActivate = document.getElementById('toActivate');



const functionsCustom = {
  clearTimer() {
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
  },

  getTotalSeconds() {
    return Number(hoursInput.value) *3600 + Number(minutesInput.value) * 60 + Number(secondsInput.value);
  }
}

let timerInterval;
let totalSeconds = 0;

timerButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    toActivate.classList.remove('active');
    return;
  }

  if (!totalSeconds) {
    totalSeconds = functionsCustom.getTotalSeconds();
  }
  if (!isNaN(totalSeconds) && totalSeconds > 0) {
    toActivate.classList.add('active');
    timerInterval = setInterval(() => {
      totalSeconds--

      const hoursCounter = Math.floor(totalSeconds / 3600);
      const minutesCounter = Math.floor(totalSeconds % 3600 / 60);
      const secondsCounter = Math.floor(totalSeconds % 60);

      hoursInput.value = String(hoursCounter).padStart(2, '0');
      minutesInput.value = String(minutesCounter).padStart(2, '0');
      secondsInput.value = String(secondsCounter).padStart(2, '0');

      if (totalSeconds < 1) {
        clearInterval(timerInterval);
        timerInterval = 0;
        toActivate.classList.remove('active');
        totalSeconds = 0;
        return;
      }
      
    }, 1000);
  }
})