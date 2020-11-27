// Creare un oggetto che descriva uno studente
// con le seguenti proprietà: nome,
// cognome e età. Stampare a schermo attraverso
// il for in tutte le proprietà;
// Creare un array di oggetti di studenti.
//  Ciclare su tutti gli studenti e stampare
//  per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso
// 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

var studenti = [
  {
    "nome" : "Leonardo",
    "cognome" : "Capogna",
    "età" : 25,
  },
  {
    "nome" : "Silvia",
    "cognome" : "Masci",
    "età" : 23,
  },
  {
    "nome" : "Alice",
    "cognome" : "De Angelis",
    "età" : 26,
  },
  {
    "nome" : "Lorenzo",
    "cognome" : "Corsetti",
    "età" : 21,
  },
];

//stampa in console tutti gli studenti della lista
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome, studenti[i].cognome, studenti[i].età);
}

//inserisci un nuovo studente
for (var i = 0; i < 1; i++) {
  studenti.nome = prompt("scrivi il tuo nome");
  studenti.cognome = prompt("scrivi il tuo cognome");
  studenti.età = prompt("inserisci la tua età");
}
console.log(studenti);
