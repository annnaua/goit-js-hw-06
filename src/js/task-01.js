const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemsEl.length);

for (const item of itemsEl) {
	console.log('Category:', item.firstElementChild.textContent);
	console.log('Elements:', item.lastElementChild.childElementCount);
}

// for (const title of titleOfCategory) {
// 	console.log('Category:', title.textContent);
// }

// for (const listEl of listCategotyEl) {
// 	console.log('Elements:', listEl.lastElementChild.children.length);
// }
