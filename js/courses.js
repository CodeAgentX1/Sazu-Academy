const track = document.querySelector(".courses__track");
const next = document.querySelector(".courses__btn--next");
const prev = document.querySelector(".courses__btn--prev");

let position = 0;

const cardWidth = 305;
const moveAmount = cardWidth * 2;

next.addEventListener("click", () => {
  position -= moveAmount;
  track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () => {
  position += moveAmount;
  if(position > 0){
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
});

// Contact JS
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

// Scroll bo'lganda ishlasin
window.addEventListener('scroll', reveal);
// Sahifa yuklanganda ham darhol tekshirsin
window.addEventListener('load', reveal);