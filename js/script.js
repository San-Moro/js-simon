/**Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/



// generatedNumbers è l'Array di 5 numeri random generati in un range da 1 a 100
const simonNumbers = 5;
const generatedNumbers = generateNumbersRndm(simonNumbers);
console.log(generatedNumbers);

const numberScreen = document.getElementById("numbers-container");

// mostra a schermo i numeri random generati
numberScreen.innerHTML = generatedNumbers;

// Alla scadenza del tempo nascondere i numeri
setTimeout(function() {
    numberScreen.innerHTML = "";
}, 3000);


// setTimeout che dopo 30 secondi chiede all'utente i numeri che sono appena stati nascosti
// userNumbers è l'Array di 5 numeri inseriti dall'utente tramite la funzione toAskNumber

setTimeout(function() {
    const userNumbers = toAskNumber(simonNumbers);
    console.log(userNumbers);
    // confrontare i due array per poi salvare i numeri indovinati
    const numbersGuessed = compareNumbers(generatedNumbers, userNumbers);
    console.log(numbersGuessed);
    // stampare Output
    printResult(numbersGuessed);

}, 4000);





// FUNCTIONS

/**getRndInteger w3
Description: funzione che genera numeri random in un range min -> max
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**generateNumbersRndm
 * Description: funzione che genera numeri random da 1 a howManyNumbers in ordine casuale
 * @param {number} howManyNumbers
 * @returns {Array} array di numeri generati casualmente di lunghezza howManyNumbers
*/
function generateNumbersRndm(howManyNumbers) {
    const arrayNumbers = [];
    while(arrayNumbers.length < howManyNumbers) {
        const rndNumbers = getRndInteger(1, 100);
        if (!arrayNumbers.includes(rndNumbers)) {
            arrayNumbers.push(rndNumbers);
        }
    }
    return arrayNumbers;
}

/**toAskNumber
 * Description: funzione per chiedere i numeri all'utente e salva in un array
 * @param {number} numbersQty- la quantità di tentativi 
 * @returns {Array} array di numeri inseriti dall'utente
*/

function toAskNumber(numbersQty) {
    const userArray = [];
    // chiedi i numeri finchè userAnswer.length < simonNumbers.length
    for (let i = 0; i < numbersQty; i++) {
        const userAnswer = parseInt(prompt("Inserisci un numero che hai visto precedentemente"));
        userArray.push(userAnswer);
    }
    return userArray;
}

/**
 * Description : confronta i due array e restituisce l'array con gli elementi in comune fra i due
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @returns {Array} Array di numeri in comune
 */
function compareNumbers(firstArray, secondArray) {
    const result = [];
    //ciclare il primo array
    for (let i = 0; i<firstArray.length; i++) {
        const thisElement = firstArray[i];
        //Se questo elemento è incluso nel secondo array
        if (secondArray.includes(thisElement)) {
            //lo pusho nell'array del risultato
            result.push(thisElement);
        }
    }
    return result;
}


/**
 * Description: stampa i numeri indovinati e la loro quantità
 * @param {any} resultArray è l'array di numeri da stampare
 */
function printResult(resultArray) {
    document.getElementById("result").innerHTML = `Hai indovinato ${resultArray.length} numeri ${resultArray}`;

}




