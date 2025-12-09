// Gestione hamburger menu (mobile)
const hamburger = document.getElementById("hamburger");
const navbar    = document.getElementById("navbar");

if (hamburger && navbar) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Chiudi il menu quando clicchi una voce
  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}
