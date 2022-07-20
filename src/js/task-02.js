const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientPotatoesEl = document.createElement('li');
ingredientPotatoesEl.classList.add('item');
ingredientPotatoesEl.textContent = 'Potatoes';

const ingredientMushroomsEl = document.createElement('li');
ingredientMushroomsEl.classList.add('item');
ingredientMushroomsEl.textContent = 'Mushrooms';

const ingredientGarlicEl = document.createElement('li');
ingredientGarlicEl.classList.add('item');
ingredientGarlicEl.textContent = 'Garlic';

const ingredientTomatosEl = document.createElement('li');
ingredientTomatosEl.classList.add('item');
ingredientTomatosEl.textContent = 'Tomatos';

const ingredientHerbsEl = document.createElement('li');
ingredientHerbsEl.classList.add('item');
ingredientHerbsEl.textContent = 'Herbs';

const ingredientCondimentsEl = document.createElement('li');
ingredientCondimentsEl.classList.add('item');
ingredientCondimentsEl.textContent = 'Condiments';

ingredientsEl.append(
	ingredientPotatoesEl,
	ingredientMushroomsEl,
	ingredientGarlicEl,
	ingredientTomatosEl,
	ingredientHerbsEl,
	ingredientCondimentsEl
);

// const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);

// const ingredient = ingredients.map((ingredient) => {
// 	const item = document.createElement('li');
// 	console.log(item);

// 	item.textContent = ingredient;
// 	console.log(item);

// 	item.classList.add('item');
// 	console.log(item);

// 	return item;
// });

// ingredientsEl.append(...ingredient);
