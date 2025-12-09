// ----- HAMBURGER -----
const hamburger = document.getElementById("hamburger");
const navbar    = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// ----- LIGHTBOX -----
const thumbs = document.querySelectorAll(".portfolio-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lbClose = document.querySelector(".lightbox-close");

thumbs.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
  });
});

lightbox.addEventListener("click", ()=>{
  lightbox.classList.remove("open");
});


// ----- MODAL REVIEW -----
const btnOpen = document.getElementById("open-review-form");
const modal = document.getElementById("review-modal");
const btnClose = document.querySelector(".review-modal-close");

btnOpen.addEventListener("click", ()=>{
  modal.classList.add("open");
});

btnClose.addEventListener("click", ()=>{
  modal.classList.remove("open");
});

// ----- CAROSELLO -----
const track = document.querySelector(".review-track");
const slides = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".reviews-dot");
let index = 0;

function showSlide(i){
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((d,di)=>{
    d.classList.toggle("active", di===index);
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click", ()=>showSlide(i));
});

setInterval(()=>showSlide(index+1),7000);
