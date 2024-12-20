const form = document.querySelector(".login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");

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

form.addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("error").innerHTML = "";
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();

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

	alert("Login successful!");
	form.reset();
});
