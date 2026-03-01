const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".mobile-overlay");
const mobileBreakpoint = window.matchMedia("(max-width: 992px)");

const closeMobileMenu = () => {
  toggle.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  dropdown.classList.remove("active");
};

/* DROPDOWN */
dropBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("active");
});

/* CLOSE dropdown when click outside */
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

/* MOBILE MENU */
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  closeMobileMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
});

mobileBreakpoint.addEventListener("change", (e) => {
  if (!e.matches) {
    closeMobileMenu();
  }
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* Scroll shadow */
window.addEventListener("scroll",()=>{
  document.querySelector(".header")
  .classList.toggle("scrolled",window.scrollY>10);
});


//Home-section Animation
document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.from(".sazu-wrapper", { scale: 0.8, opacity: 0, duration: 1, ease: "expo.out" })
      .from(".sazu-title", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".sazu-search-box", { x: -100, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".sazu-image-holder", { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
      .from(".floating-box", { 
          scale: 0, 
          rotation: 360, 
          stagger: 0.2, 
          ease: "back.out(2)",
          duration: 0.8 
      }, "-=0.5");

    // Doimiy suzish
    gsap.to(".floating-box", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
    });
});