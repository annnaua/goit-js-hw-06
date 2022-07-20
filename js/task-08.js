const formEl = document.querySelector('.login-form');
// console.log(formEl);

formEl.addEventListener('submit', (e) => {
	e.preventDefault();

	// const email = e.currentTarget.elements.email.value;
	// const password = e.currentTarget.elements.password.value;

	const {
		elements: { email, password },
	} = e.currentTarget;

	// console.log(email.value);
	// console.log(password.value);

	if (email.value && password.value) {
		const formData = {
			email: email.value,
			password: password.value,
		};

		console.log(formData);

		e.currentTarget.reset();
	} else {
		alert('Please fill in all the fields!');
	}
});
