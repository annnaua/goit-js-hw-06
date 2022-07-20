const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (name) => {
	nameOutput.textContent = name.currentTarget.value || 'Anonymous';
});
