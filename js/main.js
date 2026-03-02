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

//Monipulation section animation
// const products = [
//   { id: 1, name: "English for Beginners", category: "English", price: 384, oldPrice: 640, rating: 5, reviews: 2078, image: "https://picsum.photos/300/200?random=1" },
//   { id: 2, name: "German Grammar Mastery", category: "German", price: 735, oldPrice: 640, rating: 5, reviews: 2078, image: "https://picsum.photos/300/200?random=2" },
//   { id: 3, name: "Business Russian", category: "Russian", price: 826, oldPrice: 640, rating: 5, reviews: 2078, image: "https://picsum.photos/300/200?random=3" },
//   { id: 4, name: "French Culture & Lang", category: "French", price: 710, oldPrice: 640, rating: 4.5, reviews: 2078, image: "https://picsum.photos/300/200?random=4" },
//   { id: 5, name: "Turkish Speaking Club", category: "Turkish", price: 384, oldPrice: 640, rating: 5, reviews: 2078, image: "https://picsum.photos/300/200?random=5" },
//   { id: 6, name: "Advanced Spanish", category: "Spanish", price: 758, oldPrice: 640, rating: 3.5, reviews: 2078, image: "https://picsum.photos/300/200?random=6" },
//   { id: 7, name: "IELTS Preparation", category: "English", price: 973, oldPrice: 640, rating: 3.5, reviews: 2078, image: "https://picsum.photos/300/200?random=7" },
//   { id: 8, name: "Daily Conversations", category: "Russian", price: 273, oldPrice: 640, rating: 4.5, reviews: 2078, image: "https://picsum.photos/300/200?random=8" },
// ];

// const mainCards = document.querySelector('.main-cards');

// function displayCourses(data) {
//     mainCards.innerHTML = data.map(course => {
//         // Yulduzchalarni chiqarish uchun kichik logika
//         let stars = "⭐".repeat(Math.floor(course.rating));
        
//         return `
//             <div class="card">
//                 <div class="card-image">
//                     <img src="${course.image}" alt="${course.name}">
//                     <span class="badge">${course.category}</span>
//                 </div>
//                 <div class="card-body">
//                     <h3>${course.name}</h3>
//                     <p class="author">Tanah Air Team</p>
//                     <div class="rating">
//                         <span class="stars">${stars}</span>
//                         <span class="reviews">(${course.reviews})</span>
//                     </div>
//                     <div class="price-section">
//                         <span class="old-price">$${course.oldPrice}</span>
//                         <span class="current-price">$${course.price}</span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }).join('');
// }

// displayCourses(products);

const products = [
  { id: 1, name: "English for Beginners", category: "English", price: 550.000, oldPrice: 740, rating: 5, reviews: 2078, image: "/images/other/usa.png" },
  { id: 2, name: "German Grammar Mastery", category: "German", price: 735, oldPrice: 640, rating: 5, reviews: 2078, image: "/images/other/germany.png" },
  { id: 3, name: "Business Russian", category: "Russian", price: 826, oldPrice: 640, rating: 5, reviews: 2078, image: "/images/other/russia.png" },
  { id: 4, name: "French Culture & Lang", category: "French", price: 710, oldPrice: 640, rating: 4.5, reviews: 2078, image: "/images/other/french.png" },
  { id: 5, name: "Turkish Speaking Club", category: "Turkish", price: 384, oldPrice: 640, rating: 5, reviews: 2078, image: "/images/other/turkey.png" },
  { id: 6, name: "Advanced Spanish", category: "Spanish", price: 758, oldPrice: 640, rating: 3.5, reviews: 2078, image: "/images/other/spain.png" },
  { id: 7, name: "IELTS Preparation", category: "English", price: 973, oldPrice: 640, rating: 3.5, reviews: 2078, image: "/images/other/uk.png" },
  { id: 8, name: "Daily Conversations", category: "Russian", price: 273, oldPrice: 640, rating: 4.5, reviews: 2078, image: "/images/other/ru.png" },
];

const mainCards = document.querySelector('.main-cards');

function displayCourses(data) {
    mainCards.innerHTML = data.map(course => {
        // Yulduzchalarni chiqarish uchun kichik logika
        let stars = "⭐".repeat(Math.floor(course.rating));
        
        return `
            <div class="card">
                <div class="card-image">
                    <img src="${course.image}" alt="${course.name}">
                    <span class="badge">${course.category}</span>
                </div>
                <div class="card-body">
                    <h3>${course.name}</h3>
                    <p class="author">Tanah Air Team</p>
                    <div class="rating">
                        <span class="stars">${stars}</span>
                        <span class="reviews">(${course.reviews})</span>
                    </div>
                    <div class="price-section">
                        <span class="old-price">$${course.oldPrice}</span>
                        <span class="current-price">$${course.price}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

displayCourses(products);