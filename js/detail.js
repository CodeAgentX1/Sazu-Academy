
const track = document.querySelector(".reviews__track");
const slides = Array.from(document.querySelectorAll(".reviews__slide"));
const prevBtn = document.querySelector(".reviews__arrow--prev");
const nextBtn = document.querySelector(".reviews__arrow--next");
const dotsContainer = document.querySelector(".reviews__dots");
const modal = document.getElementById("reviewsModal");
const modalImg = modal.querySelector(".reviews-modal__img");
const modalClose = modal.querySelector(".reviews-modal__close");
const modalBackdrop = modal.querySelector(".reviews-modal__backdrop");

let currentIndex = 0;
let slidesPerView = 4;
let autoInterval;

// slides per view responsiv
function updateSlidesPerView() {
  const w = window.innerWidth;
  if (w <= 480) slidesPerView = 1;
  else if (w <= 768) slidesPerView = 2;
  else if (w <= 992) slidesPerView = 3;
  else slidesPerView = 4;
}

function updateDots() {
  dotsContainer.innerHTML = "";
  const pages = Math.ceil(slides.length / slidesPerView);

  for (let i = 0; i < pages; i++) {
    const btn = document.createElement("button");
    if (i === Math.floor(currentIndex / slidesPerView)) {
      btn.classList.add("is-active");
    }
    btn.addEventListener("click", () => {
      currentIndex = i * slidesPerView;
      moveToSlide();
      restartAuto();
    });
    dotsContainer.appendChild(btn);
  }
}

function moveToSlide() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const wrapper = document.querySelector(".reviews__track-wrapper");
  const wrapperWidth = wrapper.getBoundingClientRect().width;

  let offset;

  if (window.innerWidth <= 480) {
    // 1 ta slayd, to‘liq o‘rtada:
    // joriy slaydning markazi: currentIndex * slideWidth + slideWidth / 2
    // wrapper markazi: wrapperWidth / 2
    // trackni shunday suramizki, ikkalasi teng bo‘lsin
    const slideCenter = currentIndex * slideWidth + slideWidth / 2;
    const wrapperCenter = wrapperWidth / 2;
    offset = slideCenter - wrapperCenter;
  } else {
    // eski xatti-harakat: chapdan chapga
    offset = slideWidth * currentIndex;
  }

  track.style.transform = `translateX(-${offset}px)`;
  updateDots();
}

function nextSlide() {
  currentIndex += 1;
  if (currentIndex > slides.length - slidesPerView) currentIndex = 0;
  moveToSlide();
}

function prevSlide() {
  currentIndex -= 1;
  if (currentIndex < 0) currentIndex = Math.max(0, slides.length - slidesPerView);
  moveToSlide();
}

function startAuto() {
  autoInterval = setInterval(nextSlide, 3500);
}

function stopAuto() {
  clearInterval(autoInterval);
}

function restartAuto() {
  stopAuto();
  startAuto();
}

// Modal functions
function openModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt || "Review";
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

// Events
nextBtn.addEventListener("click", () => {
  nextSlide();
  restartAuto();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  restartAuto();
});

track.addEventListener("mouseenter", stopAuto);
track.addEventListener("mouseleave", startAuto);

// Rasmga bosilganda modal
document.querySelectorAll(".reviews__img").forEach((img) => {
  img.addEventListener("click", () => {
    openModal(img.src, img.alt);
  });
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// init
updateSlidesPerView();
window.addEventListener("resize", () => {
  const old = slidesPerView;
  updateSlidesPerView();
  if (old !== slidesPerView) {
    currentIndex = 0;
    moveToSlide();
  }
});

moveToSlide();
startAuto();

// Header none
const header = document.querySelector(".header");

// Modal functions
function openModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt || "Review";
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";

  // HEADERNI YASHIRISH
  if (header) {
    header.classList.add("header--hidden");
  }
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";

  // HEADERNI QAYTA KO'RSATISH
  if (header) {
    header.classList.remove("header--hidden");
  }
}

// Header JS

// Header
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")
const overlay = document.querySelector(".mobile-overlay")

menuToggle.addEventListener("click", () => {

menuToggle.classList.toggle("active")
nav.classList.toggle("active")
overlay.classList.toggle("active")

})

overlay.addEventListener("click", () => {

menuToggle.classList.remove("active")
nav.classList.remove("active")
overlay.classList.remove("active")

})


