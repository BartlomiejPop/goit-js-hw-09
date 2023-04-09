startBtn = document.querySelector('.start');
stopBtn = document.querySelector('.stop');
let timerId;

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

const changeColors = () => {
  startBtn.setAttribute('disabled', '');
  timerId = setInterval(getRandomHexColor, 1000);
};

startBtn.addEventListener('click', changeColors);

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
});
