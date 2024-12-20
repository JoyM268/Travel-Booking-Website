const form = document.querySelector(".login-form");
const emailInput = document.getElementById("name");
const passwordInput = document.getElementById("pass");
const confirmPasswordInput = document.getElementById("cpass");

function checkEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function checkPassword(password) {
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
	return passwordRegex.test(password);
}

function displayError(message) {
	const error = document.getElementById("error");
	error.innerHTML = message;
}

function clearErrors() {
	const error = document.getElementById("error");
	if (error) {
		error.innerHTML = "";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	clearErrors();

	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const confirmPassword = confirmPasswordInput.value.trim();

	if (!checkEmail(email)) {
		displayError("Please enter a valid email address.");
		return;
	}

	if (!checkPassword(password)) {
		displayError(
			"Password must be at least 8 characters long and include letters, numbers, and symbols."
		);
		return;
	}

	if (password !== confirmPassword) {
		displayError("Passwords do not match. Please try again.");
		return;
	}

	alert("Signup successful!");
	form.reset();
});
