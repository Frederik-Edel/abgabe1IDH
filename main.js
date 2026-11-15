
const eingabe = document.querySelector("#eingabe");
const ausgabeDiv = document.querySelector("#ausgabe");
let filme = [];
let ausgabe = [];

  datenAbfrage();

function submitData() {
console.log(filme);
ausgabe = filme.filter(film => film.jahr < Number(eingabe.value));
ausgabeDiv.innerHTML = "";
ausgabe.forEach(e => {
  ausgabeDiv.innerHTML += e.titel + " (" + e.jahr + "), ";
});

}

async function datenAbfrage() {

    const antwort = await fetch("data.json");

    const daten = await antwort.json();

    filme = daten;

}