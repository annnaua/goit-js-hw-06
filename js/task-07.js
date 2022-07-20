const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', (value) => {
	const size = value.currentTarget.value;
	// console.log(size);

	textEl.style.fontSize = `${size}px`;
});
