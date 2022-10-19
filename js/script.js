/**Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

/**
 * [*] Crea Array simonNumbers
 * [] Crea Array userNumbers
 * [*] Genera 5 numeri casuali in un range da 1 a 100 ==> function generateNumbersRndm
 * [*] salvare i 5 numeri random nell'Array simonNumbers
 * [*] mostra a schermo i numeri simonNumbers per 30 sec
 *  [] crea timer setTimeout che dopo 30 secondi
 *      [] nasconde i numeri simonNumbers
 *      [] chiede for 5 volte i numeri che erano a schermo
 * [] Confronta simonNumbers e userNumbers
 * [] Crea Array result
 * [] SE tra questi due Array ci sono numeri uguali ===
 *      [] questi .this vengono salvati nell'Array result
 * [] Else 
 *      [] niente, non vengono salvati
 * [] Mostra a schermo il risultato di Array result
*/

// simonNumbers è l'Array di 5 numeri random in un range da 1 a 100
const simonNumbers = 5;
const generatedNumbers = generateNumbersRndm(simonNumbers);
console.log(generatedNumbers);

// mostra a schermo i numeri random generati
const numberScreen = document.querySelector("h1");
numberScreen.innerHTML = generatedNumbers;

// userNumbers è l'Array di 5 numeri inseriti dall'utente tramite la funzione toAskNumber
const userNumbers = [];

// setTimeout che dopo 30 secondi chiede all'utente i numeri che sono appena stati nascosti
setTimeout(toAskNumber, 3000);

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
 * Description: funzione per chiedere il numero all'utente 
 * @param {number} 
 * @returns {Array} array di numeri 
*/

function toAskNumber() {
    let userAnswer = parseInt(prompt("Inserisci i numeri che hai visto precedentemente"));
    // chiedi i numeri finchè userAnswer.length < simonNumbers.length
    while(userAnswer.length < simonNumbers.length) {
    }
}



