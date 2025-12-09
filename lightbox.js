document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".portfolio-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  // apertura
  thumbs.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("open");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      document.body.style.overflow = "hidden"; // niente scroll sotto
    });
  });

  // funzione chiusura
  const close = () => {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  lightboxClose.addEventListener("click", close);

  // click fuori dall'immagine
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) close();
  });

  // ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });
});
