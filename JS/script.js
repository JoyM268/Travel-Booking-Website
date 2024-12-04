function handleMenu() {
	let open = document.getElementById("menu-open");
	let close = document.getElementById("menu-close");
	let menu = document.getElementById("side-menu");

	if (open.classList.contains("hidden")) {
		open.classList.remove("hidden");
		close.classList.add("hidden");
		open.classList.add("rotate-clock");
		close.classList.remove("rotate-anticlock");
		menu.classList.remove("slide-in");
		menu.classList.add("slide-out");
	} else {
		close.classList.remove("hidden");
		open.classList.add("hidden");
		close.classList.add("rotate-anticlock");
		open.classList.remove("rotate-clock");
		menu.classList.add("slide-in");
		menu.classList.remove("slide-out");
	}
}

gsap.from(".phrase", {
	y: 50,
	opacity: 0,
	duration: 1,
	delay: 0.5,
});

gsap.from(".search-form", {
	y: 50,
	opacity: 0,
	duration: 1,
	delay: 0.5,
});

let watermark = document.createElement("span");
watermark.classList.add("watermark");
watermark.innerText = "Developed by Joy Mascarenhas";
document.getElementById("page").append(watermark);
