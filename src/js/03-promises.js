import { Notify } from 'notiflix/build/notiflix-notify-aio';
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");
const submitBtn = document.querySelector("button[type='button']");
let counter = 0;
let timeCounter = 1;
let position = 1;
let intervalID;

// const intervalID = setInterval(
//   myCallback,
//   stepEl.value,
//   'Parameter 1',
//   'Parameter 2'
// );

const generatePromises = (position, delay) => {
  return new Promise((resolve, reject) => {
    // function createPromise(position, delay) {
    // const intervalID = setInterval(
    //   createResults,
    //   stepEl.value,
    //   amountEl.value
    // );

    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }

    // }
  });
};

//Dodać do funcki setInterval ,bo teraz zwraca tylko jedną wartość

submitBtn.addEventListener('click', () => {
  setTimeout(() => {
    intervalID = setInterval(handleResult, stepEl.value);
  }, delayEl.value);

  const handleResult = () => {
    generatePromises(position, +delayEl.value + +stepEl.value * timeCounter)
      .then(resolve => Notify.success(resolve))
      .catch(error => Notify.failure(error));
    timeCounter++;
    counter++;
    position++;
    if (+counter === +amountEl.value) {
      counter = 0;
      position = 1;
      timeCounter = 1;
      clearInterval(intervalID);
    }
  };
});

// .then(
//   setTimeout(() => {
//     setInterval(
//       Notify.success(
//         `✅ Fulfilled promise ${position} in ${delayEl.value}ms`
//       ),
//       stepEl.value
//     );
//   }, delayEl.value)
// )
// .catch(
//   setTimeout(() => {
//     setInterval(
//       Notify.failure(
//         `❌ Rejected promise ${position} in ${delayEl.value}ms`
//       ),
//       stepEl.value
//     );
//   }, delayEl.value)
// );
