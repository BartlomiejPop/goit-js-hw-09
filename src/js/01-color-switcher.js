startBtn = document.querySelector('.start');
stopBtn = document.querySelector('.stop');
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  timerId = setInterval(
    (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
});
