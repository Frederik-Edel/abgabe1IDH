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
