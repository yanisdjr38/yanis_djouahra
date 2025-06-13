// Carousel amélioré et sécurisé
let slideIndex = 0;
let slides;

window.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".mySlides");
  if (slides.length > 0) {
    showSlide(slideIndex);
    document
      .querySelector(".w3-display-left")
      ?.addEventListener("click", () => changeSlide(-1));
    document
      .querySelector(".w3-display-right")
      ?.addEventListener("click", () => changeSlide(1));
  }
});

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = index === n ? "block" : "none";
  });
}
