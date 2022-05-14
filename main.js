const gridContainer = document.getElementById("grid-container");

//Creates each number button element and assigns class and ids
const numberBtn = document.getElementsByClassName("number-btns");
for (let i = 0; i <= 9; i++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "number-btns";
	createDiv.id = "btn-" + i;
	numberBtn[i].textContent = i;
	numberBtn[i].onclick = () => {
		console.log(i);
		return i;
	};
}

//Gives strings for operator-btns ids and textContent
const operators = [
	{ id: "plus", text: "+" },
	{ id: "minus", text: "-" },
	{ id: "multiply", text: "*" },
	{ id: "divid", text: "/" },
];

//Creates each operator button element and assigns class and ids
const operatorBtn = document.getElementsByClassName("operator-btns");
for (let j = 0; j < operators.length; j++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "operator-btns";
	createDiv.id = "btn-" + operators[j].id;
	operatorBtn[j].textContent = operators[j].text;
	operatorBtn[j].onclick = () => {
		console.log(operators[j].text);
		return operators[j].text;
	};
}

//Gives strings for misc-btns ids and textContent
const miscBtnIds = [
	{ id: "decimal", text: "." },
	{ id: "equal", text: "=" },
	{ id: "back", text: "<" },
	{ id: "clear", text: "C" },
];

//Creates decimal, equal, back, and clear buttons and assigns class and ids
const miscBtn = document.getElementsByClassName("misc-btns");
for (let k = 0; k < miscBtnIds.length; k++) {
	const createDiv = document.createElement("div");
	gridContainer.append(createDiv);
	createDiv.className = "misc-btns";
	createDiv.id = "btn-" + miscBtnIds[k].id;
	miscBtn[k].textContent = miscBtnIds[k].text;
	miscBtn[k].onclick = () => {
		console.log(miscBtnIds[k].text);
		return miscBtnIds[k].text;
	};
}
