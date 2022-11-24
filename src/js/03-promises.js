import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();
  const delayValue = Number(e.target.elements.delay.value);
  const stepValue = Number(e.target.elements.step.value);
  const amountValue = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amountValue; i++) {
    let stepTime = delayValue + stepValue * (i - 1);
    createPromise(i, stepTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay} ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay} ms`
        );
      });
  }
}
refs.form.addEventListener('submit', onSubmit);
