const gridContainer = document.getElementById("grid-container");

//Creates each number button element and assigns class and ids
const numberBtn = document.getElementsByClassName("number-btns");
for (let i = 0; i <= 9; i++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "number-btns";
	createDiv.id = "btn-" + i;
	numberBtn[i].textContent = i;
}

//Gives operator strings for operator-btns ids and textContent
const operators = ["+", "-", "*", "/"];

//Creates each operator button element and assigns class and ids
const operatorBtn = document.getElementsByClassName("operator-btns");
for (let j = 0; j < operators.length; j++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "operator-btns";
	createDiv.id = "btn-" + operators[j];
	operatorBtn[j].textContent = operators[j];
}
