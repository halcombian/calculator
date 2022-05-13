const numberId = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
];

const gridContainer = document.getElementById("grid-container");
const numberDiv = document.getElementsByClassName("number-btns");

for (let i = 0; i < numberId.length; i++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "number-btns";
	numberDiv[i].textContent = i;
}
