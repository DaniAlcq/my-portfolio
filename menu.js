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

// ==========================
//  CAROSELLO RECENSIONI
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".review-track");
  if (!track) return; // se non c'è la sezione, esci

  const slides = Array.from(track.querySelectorAll(".review-card"));
  const dots   = Array.from(document.querySelectorAll(".reviews-dot"));
  const prev   = document.querySelector(".reviews-arrow.prev");
  const next   = document.querySelector(".reviews-arrow.next");

  let index = 0;
  let autoTimer = null;

  function goToSlide(i){
    if (!slides.length) return;
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    // aggiorna pallini
    dots.forEach((d, di) => {
      d.classList.toggle("active", di === index);
    });
  }

  function nextSlide(){
    goToSlide(index + 1);
  }

  function prevSlide(){
    goToSlide(index - 1);
  }

  // click frecce
  if (next) next.addEventListener("click", () => {
    nextSlide();
    restartAuto();
  });

  if (prev) prev.addEventListener("click", () => {
    prevSlide();
    restartAuto();
  });

  // click pallini
  dots.forEach((dot, di) => {
    dot.addEventListener("click", () => {
      goToSlide(di);
      restartAuto();
    });
  });

  // autoplay leggero
  function startAuto(){
    if (autoTimer) return;
    autoTimer = setInterval(nextSlide, 7000);
  }

  function stopAuto(){
    if (!autoTimer) return;
    clearInterval(autoTimer);
    autoTimer = null;
  }

  function restartAuto(){
    stopAuto();
    startAuto();
  }

  // pausa su hover desktop
  const wrapper = document.querySelector(".reviews-wrapper");
  if (wrapper){
    wrapper.addEventListener("mouseenter", stopAuto);
    wrapper.addEventListener("mouseleave", startAuto);
  }

  // inizializza
  goToSlide(0);
  startAuto();
});
// ==========================
// MODALE RECENSIONI
// ==========================
const btnOpenReview = document.getElementById("open-review-form");
const reviewModal   = document.getElementById("review-modal");
const btnCloseReview = document.querySelector(".review-modal-close");
const reviewForm = document.getElementById("review-form");

if (btnOpenReview && reviewModal) {
  btnOpenReview.addEventListener("click", ()=>{
    reviewModal.classList.add("open");
  });
}

if (btnCloseReview) {
  btnCloseReview.addEventListener("click", ()=>{
    reviewModal.classList.remove("open");
  });
}

// chiudi cliccando fuori
if (reviewModal) {
  reviewModal.addEventListener("click", e=>{
    if(e.target === reviewModal) {
      reviewModal.classList.remove("open");
    }
  });
}

// INVIO FORM → GOOGLE SHEET
if(reviewForm){
  reviewForm.addEventListener("submit", e=>{
    e.preventDefault();

    fetch("INCOLLA_QUI_LA_URL_DEL_TUO_WEB_APP_GOOGLE", {
      method:"POST",
      body: new FormData(reviewForm)
    })
    .then(()=> {
      reviewForm.reset();
      reviewModal.classList.remove("open");
      alert("Grazie per la recensione!");
    })
    .catch(()=>{
      alert("Errore invio recensione");
    });
  });
}
