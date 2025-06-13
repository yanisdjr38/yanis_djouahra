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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tech = button.getAttribute("data-tech");

      // Toggle active button
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
      projects.forEach((project) => {
        const matches = tech === "all" || project.dataset.tech.includes(tech);
        project.style.display = matches ? "block" : "none";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const message = document.getElementById("form-message");

  form?.addEventListener("submit", (e) => {
    e.preventDefault(); // annule l'envoi immédiat
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
    }).then((res) => {
      if (res.ok) {
        message.style.display = "block";
        form.reset();
      } else {
        message.textContent = "❌ Une erreur s’est produite.";
        message.style.display = "block";
      }
    });
  });
});

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
