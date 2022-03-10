const iconContainer = document.querySelector(".container");
//console.log(iconContainer);

createCards(iconsArray);

const iconSelector = document.querySelector("#icon-selector");
//console.log(iconSelector);

iconSelector.addEventListener("change", function () {
	if (iconSelector.value != "all") {
		const sortedIconsArray = sortIconsByType(iconsArray, iconSelector.value);
		createCards(sortedIconsArray);
	} else {
		createCards(iconsArray);
	}
});

// const optionSelection = document.createElement('option');
optionsArray = [];
iconsArray.forEach((icon) => {
	if (!optionsArray.includes(icon.type)) {
		optionsArray.push(icon.type);
	}
	//console.log(optionsArray);
});
optionsArray.forEach((option) => {
	iconSelector.innerHTML += `
    <option value="${option}">${option[0].toUpperCase()}${option.substring(1)}</option>
    `;
});

function createRandomColor() {
	const symbols = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
	];
	let hexColor = "#";
	for (let index = 0; index < 6; index++) {
		hexColor += symbols[randomNumber(0, 15)];
	}
	return hexColor;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortIconsByType(array, eleFilter) {
	const sortedArray = array.filter((arrayElement) => {
		if (arrayElement.type == eleFilter) {
			return true;
		}
		return false;
	});
	return sortedArray;
}

function createCards(array) {
	iconContainer.innerHTML = "";
	array.forEach((element) => {
		const iconCard = document.createElement("div");
		iconCard.classList.add("card");
		iconCard.innerHTML = `
    <span class="icon" style="color: ${createRandomColor()}"><i class="${
			element.family
		} ${element.prefix}${element.name}"></i></span>
    <span class="label">${element.name}</span>
`;
		iconContainer.append(iconCard);
	});
}
