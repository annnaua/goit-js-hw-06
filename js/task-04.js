const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action=decrement]');
const incrementBtnEl = document.querySelector('[data-action=increment]');

decrementBtnEl.addEventListener('click', () => {
	counterValue -= 1;
	counterValueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', () => {
	counterValue += 1;
	counterValueEl.textContent = counterValue;
});
