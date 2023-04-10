import { Notify } from 'notiflix/build/notiflix-notify-aio';
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");
const submitBtn = document.querySelector("button[type='button']");
let counter = 0;
// const intervalID = setInterval(
//   myCallback,
//   stepEl.value,
//   'Parameter 1',
//   'Parameter 2'
// );

const generatePromises = () => {
  setTimeout(function createPromise() {
    // for (i = 0; i < amountEl.value; i++) {
    const x = setInterval(createResults, stepEl.value, amountEl.value);
    // }

    function createResults() {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        Notify.success('resolved');
      } else {
        // Reject
        Notify.failure('rejected');
      }
      counter++;
      if (+counter === +amountEl.value) {
        clearInterval(x);
        counter = 0;
      }
    }
  }, delayEl.value);
};

submitBtn.addEventListener('click', () => {
  generatePromises();
});
