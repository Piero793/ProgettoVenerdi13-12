/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 20) + 1;
console.log("il numero casuale generato è:" + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Piero",
  surname: "Lacitignola",
  age: 31,

}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = [];
me.skills.push("html,css,Javascript");
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Browser");
console.log(me)



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me)


// Funzioni           //ho preferito l'uso delle arrow function su ogni esercizio per abitudine  per rispettare lo standard ES6

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  let num = Math.floor(Math.random() * 6) + 1;
  return num;
}

console.log("numero generato casualmente:" + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else
    return "I numeri sono uguali";

}
console.log(whoIsBigger(10, 4));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (string) => {
  return string.split(" ");

}

console.log(splitMe("Ho Fallito Il Benchmark"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (string, bool) => {
  if (bool === true) {
    return string.slice(1);
  } else if (bool === false)
    return string.slice(0, -1);

}
console.log(deleteOne("Ciao", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] >= '0' && string[i] <= '9')) {
      result += string[i];
    }
  }
  return result.trim();
};

console.log(onlyLetters("Ho 31 anni"));
console.log(onlyLetters("1234 ABCD 5678"));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(string);
}

console.log(isThisAnEmail("pierolacitignola7@gmail.com"));
console.log(isThisAnEmail("aaaaaaa.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const giorniDellaSettimana = [
    "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"
  ];

  const dataCorrente = new Date();
  const giornoDellaSettimana = dataCorrente.getDay();           //simile all'esercizio coding live calendario di giovedi

  return giorniDellaSettimana[giornoDellaSettimana];
};

console.log(whatDayIsIt());



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  const dataCorrente = new Date();
  //console.log(dataCorrente);

  const dataIniziale = new Date(date);

  const differenzaInMillisecondi = dataCorrente - dataIniziale;

  // Converto la differenza in giorni 
  const differenzaInGiorni = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

  return differenzaInGiorni;
};

console.log(howManyDays('2023-01-01'));
console.log(howManyDays('1970-01-01'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const DataDiOggi = new Date();
  const mese = DataDiOggi.getMonth() + 1;   // + 1 sempre perchè i mesi in JS vanno da 0 a 11!
  const giorno = DataDiOggi.getDate();

  // Data del compleanno
  const compleannoMese = 10;
  const compleannoGiorno = 7;

  // Controllo se oggi è il mio compleanno 
  if (mese === compleannoMese && giorno === compleannoGiorno) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());     //dovrà restituire false



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (ogg, str) => {

  delete ogg[str];
  return ogg;
};

const ogg = {
  anni: 31,
  motto: "Ho fallito il benchmark!"

};

console.log(deleteProp(ogg, "motto"));
console.log(deleteProp(ogg, "anni"));




/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/*const newestMovie = () => {
  let FilmpiùRecente = movies[0];         dovrei aver commesso un qualche errore in questo punto

  // Scorri l'array dei film
  for (let i = 1; i < movies.length; i++) {
    // Confronta gli anni per trovare il film più recente, con parseInt() converto una stringa numerica in un numero intero
    if (parseInt(movies[i].Year) > parseInt(FilmpiùRecente.Year)) {
      FilmpiùRecente = movies[i];
    }
  }

  return FilmpiùRecente;
};                                                    

console.log(newestMovie());






/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () => {
  return movies.length;
};



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = () => {
  return movies.map(movie => movie.Year);       //con map() creo un array ed eseguo una funzione su ciascun elemento dell'array originale.
};


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  return movies.reduce((somma, movie) => somma + parseInt(movie.Year), 0);
};


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  return movies.filter(movie => movie.Title.includes(str)).map(movie => movie.Title);
};


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (string) => {
  let matchUnmatch = {
    match: [],
    unmatch: [],
  }
  movies.forEach(movie => {
    if (movie.Title.includes(string)) {           //credo di aver sbagliato
      matchUnmatch.match.push(movie);
    } else {
      matchUnmatch.unmatch.push(movie);

    }
  })
  return matchUnmatch;
}



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (index) => {
  // Creo una copia dell'array movies per evitare modifiche all'array originale usando lo spread operator
  let updatedMovies = [...movies];

  // Controlla se l'indice è valido
  if (index >= 0 && index < updatedMovies.length) {
    updatedMovies.splice(index, 1);
  }

  return updatedMovies;
};



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina) non ho capito se dovevo definire anche nell'html quindi ho definito le funzioni senza testarle

// ho preferito agganciare i nodi con querySelectorAll per rispettare ES6
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

document.querySelector("#container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTdText = () => {
  const tds = document.querySelectorAll('td');

  tds.forEach(td => {
    console.log(td.textContent);
  });
};

printTdText();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const bkgcolor = () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.style.backgroundColor = "red";
  });
};

bkgcolor();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newElement = () => {
  const myList = document.querySelector("myList");
  const newElement = document.createElement("li");
  newElement.innerHTML = "Testo";
  myList.appendChild(newElement);

};

newElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const DeleteList = () => {
  const myList = document.querySelector("#myList");

  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
};

clearList();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const newClass = () => {
  const allTr = document.querySelectorAll('tr');

  allTr.forEach(allTr => {
    allTr.classList.add('test');
  });
};

//newClass();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  halfTree(3)
 
  *
  **
  ***
 
*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  tree(3)
 
    *
   ***
  *****
 
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (num) => {
  if (num <= 1) {
    return false; 
  }

  // Verifico se num è divisibile per qualsiasi numero tra 2 e la radice quadrata di num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Se num è divisibile per i, non è un numero primo
    }
  }

  return true; // Se nessun numero lo divide, è un numero primo
};

console.log(isItPrime(7));  // dovrebbe risultare true
console.log(isItPrime(10)); // dovrebbe risultare false


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


console.log(countMovies());             //esercizio 13
console.log(onlyTheYears());            //esercizio 14
console.log(sumAllTheYears());           //esercizio 16
console.log(searchByTitle("Avengers"));  //esercizio 17
console.log(searchAndDivide("Lord"));    //esercizio 18
console.log(removeIndex(2));             //esercizio 19
