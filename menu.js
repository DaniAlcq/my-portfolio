document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("navbar");

  if (!btn || !nav) return;

  // apre/chiude il menu
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");   // usa la regola CSS #navbar.open
  });

  // chiude il menu quando clicchi su una voce (su mobile)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });

  // se ridimensioni oltre 768px, assicurati che il menu sia chiuso
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("open");
    }
  });
});
