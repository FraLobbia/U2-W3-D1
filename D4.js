/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
	return l1 * l2;
}

console.log(
	"Il mio rettangolo con base 10 e altezza 5 ha come area: " + area(10, 5)
);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
	n1 === n2 ? (result = (n1 + n2) * 3) : (result = n1 + n2);
	return result;
}

console.log(crazySum(8, 8));
console.log(crazySum(2, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
	let diff = n - 19;
	if (n > 19) {
		return Math.abs(diff) * 3;
	} else {
		return Math.abs(diff);
	}
}

let num = 25;
console.log(crazyDiff(num));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
	if ((n > 20 && n <= 100) || n === 400) {
		return true;
	} else {
		return "Il numero non è compreso tra 20 e 100 e non è neanche 400";
	}
}

let es4 = 400;
console.log(boundary(es4));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
	if (str.startsWith("Epicode")) {
		return str;
	} else {
		return "Epicode " + str;
	}
}

let es5 = "Epicode ti insegna JS!";
console.log(epify(es5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
	if (n % 3 === 0 || n % 7 === 0) {
		return true;
	} else {
		return n + " non è un multiplo di 3 o 7";
	}
}

let es6 = 323;
console.log(check3and7(es6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
	const arrayToReverse = str.split("");
	const arrayReversed = [];

	for (let i = arrayToReverse.length; i >= 0; i--) {
		const element = arrayToReverse[i];
		arrayReversed.push(element);
	}

	return arrayReversed;
}

let es7 = "ciao Stefano!";
console.log(reverseString(es7));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
	const arrayParoleSingole = str.split(" ");
	const arrayModificato = [];
	for (let i = 0; i < arrayParoleSingole.length; i++) {
		const element = arrayParoleSingole[i];
		const primaLettera = element.charAt(0).toUpperCase();
		const restoDelleLettere = element.substring(1);
		const parolaMaiusc = primaLettera + restoDelleLettere;
		arrayModificato.push(parolaMaiusc);
	}
	return arrayModificato.join(" ");
}

let es8 = "le rose sono rosse";
console.log(upperFirst(es8));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (str) => str.substring(1, str.length - 1);

let es9 = "le rose sono rosse";
console.log(cutString(es9));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
	const randomNumbers = [];
	for (let i = 0; i < n; i++) {
		const element = Math.floor(Math.random() * 11);
		console.log(element);
		randomNumbers.push(element);
	}
	return randomNumbers;
}

let es10 = 3;
console.log(giveMeRandom(es10));
