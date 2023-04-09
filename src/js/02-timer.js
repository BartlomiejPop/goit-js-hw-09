import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const inputEl = document.getElementById('datetime-picker');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const buttonEl = document.querySelector('.button');

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = new Date();
    selectedDate = selectedDates[0].getTime();
    if (selectedDates[0].getTime() < date.getTime()) {
      Notify.failure('Please choose a date in the future');
    } else {
      buttonEl.removeAttribute('disabled');
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(el) {
  return el.toString().padStart(2, '0');
}

const startCountdown = () => {
  const remainingTime = convertMs(selectedDate - new Date());
  if (selectedDate - new Date() > 0) {
    daysEl.textContent = addLeadingZero(remainingTime.days);
    hoursEl.textContent = addLeadingZero(remainingTime.hours);
    minutesEl.textContent = addLeadingZero(remainingTime.minutes);
    secondsEl.textContent = addLeadingZero(remainingTime.seconds);
  }
};

buttonEl.addEventListener('click', () => {
  setInterval(startCountdown, 1000);
});

flatpickr(inputEl, options);
