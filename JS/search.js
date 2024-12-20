const form = document.querySelector(".search-form");
const outputSection = document.querySelector(".output-container");
const tripList = document.getElementById("trip-list");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const depCity = document.getElementById("dep").value.trim();
	const destCity = document.getElementById("dest").value.trim();
	const travellers = document.getElementById("number").value.trim();

	if (!depCity || !destCity) {
		alert("Please fill in all the fields.");
		return;
	}

	form.classList.remove("show");
	form.classList.add("hidden");
	outputSection.classList.add("show");
	outputSection.classList.remove("hidden");

	const trips = [
		{
			id: 1,
			depCity: "New York",
			destCity: "London",
			date: "2024-12-25",
			price: "$500",
			availableSeats: 50,
		},
		{
			id: 2,
			depCity: "Los Angeles",
			destCity: "Paris",
			date: "2024-12-28",
			price: "$600",
			availableSeats: 30,
		},
		{
			id: 3,
			depCity: "Chicago",
			destCity: "Tokyo",
			date: "2024-12-30",
			price: "$700",
			availableSeats: 40,
		},
		{
			id: 4,
			depCity: "Los Angeles",
			destCity: "Paris",
			date: "2024-12-20",
			price: "$600",
			availableSeats: 20,
		},
	];

	const filteredTrips = trips.filter(
		(trip) =>
			trip.depCity.toLowerCase().includes(depCity.toLowerCase()) &&
			trip.destCity.toLowerCase().includes(destCity.toLowerCase())
	);

	if (filteredTrips.length === 0) {
		tripList.innerHTML = "<span>No trips found for your search.</span>";
	} else {
		tripList.innerHTML = filteredTrips
			.map(
				(trip) => `
            <li>
				<div>
                	<span><strong>Departure:</strong> ${trip.depCity} -> ${trip.destCity} <br></span>
					<span><strong>Available Seats:</strong> ${trip.availableSeats}</span>
										<button>Book Now</button>
                </div>
				<div>
					<span><strong>Date:</strong> ${trip.date} <br></span>
					<span><strong>Price:</strong> ${trip.price} <br></span>
				</div>
            </li>
        `
			)
			.join("");
	}
});
