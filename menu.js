document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar    = document.getElementById("navbar");

  if (!hamburger || !navbar) return;

  // toggle apertura/chiusura
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // chiudi al click su una voce
  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });

  // se ridimensioni sopra i 768px, assicura il menu visibile correttamente
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove("open");
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "";
    }
  });
});
