/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore*/

let num1;

do{
    num1 = Number(prompt("Inserisci il primo numero:"));
    if (isNaN(num1)) {
        alert("Per favore inserisci un numero valido");
    }
}while (isNaN(num1));

let num2;

do{
    num2 = Number(prompt("Inserisci il secondo numero:"));
    if (isNaN(num2)) {
        alert("Per favore inserisci un numero valido");
    }
} while (isNaN(num2));


if (num1 > num2) {
    alert(`Il numero maggiore è: ${num1}`);
} else if (num2 > num1) {
    alert(`Il numero maggiore è: ${num2}`);
} else {
    alert("I due numeri sono uguali.");
}

