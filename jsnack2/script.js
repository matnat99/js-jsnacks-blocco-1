// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const invitati = ["Mattia", "Samuele", "Stefano", "Rocco", "Maria", "Sara"];
const nomeUtente = prompt("Inserisci il tuo nome");

let invitato = false;


for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nomeUtente) {
        invitato = true;
    }
}


if (invitato) {
    alert(`Ciao ${nomeUtente}! Puoi partecipare alla festa.`);
} else {
    alert(`Ciao ${nomeUtente}, non sei nella lista degli invitati.`);
}
