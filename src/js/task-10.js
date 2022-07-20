function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const boxesAmountField = document.querySelector('#controls input');

const createBoxesBtn = document.querySelector('[data-create]');
const deleteBoxesBtn = document.querySelector('[data-destroy]');

createBoxesBtn.addEventListener('click', () => {
	createBoxes(boxesAmountField.value);
});
deleteBoxesBtn.addEventListener('click', () => {
	destroyBoxes();
});

function createBoxes(amount) {
	const boxes = [];
	let boxSize = 30;

	for (let i = 0; i < amount; i += 1) {
		boxes.push(document.createElement('div'));

		const box = boxes[i];

		box.style.width = `${boxSize}px`;
		box.style.height = `${boxSize}px`;
		box.style.backgroundColor = getRandomHexColor();

		boxSize += 10;
	}

	boxesEl.append(...boxes);
}

function destroyBoxes() {
	while (boxesEl.firstChild) {
		boxesEl.removeChild(boxesEl.firstChild);
	}
}
