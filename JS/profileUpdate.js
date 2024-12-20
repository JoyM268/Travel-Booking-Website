const form = document.querySelector(".profile-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const phoneInput = document.getElementById("phone");
const cPasswordInput = document.getElementById("cpass");
const nameInput = document.getElementById("name");

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

function checkPhone(phone) {
	const phoneRegex = /^[+]?[0-9]{10,15}$/;
	return phoneRegex.test(phone);
}

function checkName(name) {
	const nameRegex = /^[a-zA-Z\s]+$/;
	return nameRegex.test(name);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("error").innerHTML = "";
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const cpassword = cPasswordInput.value.trim();
	const name = nameInput.value.trim();
	const phone = phoneInput.value.trim();

	if (!checkName(name)) {
		displayError("Please enter a valid name (letters and spaces only).");
		return;
	}

	if (!checkEmail(email)) {
		displayError("Please enter a valid email address.");
		return;
	}

	if (!checkPhone(phone)) {
		displayError(
			"Please enter a valid phone number (10-15 digits, optional country code)."
		);
		return;
	}
	if (!checkPassword(password)) {
		displayError(
			"Password must be at least 8 characters long and include letters, numbers, and symbols."
		);
		return;
	}

	if (password !== cpassword) {
		displayError("Passwords do not match. Please try again.");
		return;
	}

	alert("Profile Updated");
	location.href = "../HTML/profile.html";
	form.reset();
});
