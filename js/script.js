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
    "eta" : 25,
  },
  {
    "nome" : "Silvia",
    "cognome" : "Masci",
    "eta" : 23,
  },
  {
    "nome" : "Alice",
    "cognome" : "De Angelis",
    "eta" : 26,
  },
  {
    "nome" : "Lorenzo",
    "cognome" : "Corsetti",
    "eta" : 21,
  },
];

//stampa in console tutti gli studenti della lista
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome, studenti[i].cognome, studenti[i].eta);
}

//inserisci un nuovo studente
var nuovoStudente ={};

  nuovoStudente.nome = prompt("scrivi il tuo nome");
  nuovoStudente.cognome = prompt("scrivi il tuo cognome");
  nuovoStudente.eta = parseInt(prompt("inserisci la tua età"));

 studenti.push(nuovoStudente);

alert("benvenuto nella classe 22!!");
console.log(studenti);
