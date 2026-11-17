
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


// Navigationsleiste
const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const currentYear = document.querySelector("#current-year");

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNavigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Navigation schließen" : "Navigation öffnen"
    );
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

