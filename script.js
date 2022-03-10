/*
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

const iconContainer = document.querySelector(".container");
//console.log(iconContainer);

createCards(iconsArray);

const iconSelector = document.querySelector("#icon-selector");
//console.log(iconSelector);

iconSelector.addEventListener("change", function () {
	if (iconSelector.value != 'all') {
		const sortedIconsArray = sortIconsByType(iconsArray, iconSelector.value);
		createCards(sortedIconsArray);
	} else {
		createCards(iconsArray);
	}
});

function createRandomColor() {
    const symbols = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ];
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += symbols[randomNumber(0, 15)];        
    }
    return hexColor
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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
    <span class="icon" style="color: ${createRandomColor()}"><i class="${element.family} ${element.prefix}${element.name}"></i></span>
    <span class="label">${element.name}</span>
`;
		iconContainer.append(iconCard);
	});
}
