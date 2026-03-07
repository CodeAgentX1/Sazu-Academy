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

// Background Cards
const categories = [
    { name: "Art & Design", img: "/images/background_cards/art_and_design.png" },
    { name: "Business", img: "https://picsum.photos/300/400?sig=2" },
    { name: "Copy Writing", img: "https://picsum.photos/300/400?sig=3" },
    { name: "Marketing", img: "https://picsum.photos/300/400?sig=4" },
    { name: "Programming", img: "/images/background_cards/image.png" },
    { name: "Photography", img: "https://picsum.photos/300/400?sig=6" },
    { name: "Videography", img: "https://picsum.photos/300/400?sig=7" },
    { name: "Personal Development", img: "https://picsum.photos/300/400?sig=8" }
];

const container = document.querySelector('.categories-grid');

function renderCategories() {
    container.innerHTML = categories.map(item => `
        <div class="category-card" role="button" aria-label="${item.name}">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="card-content">
                <h3>${item.name}</h3>
            </div>
        </div>
    `).join('');

    // Har bir cardga interaktiv manipulyatsiya qo'shish
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Mouse kirganda fondagi rangni biroz o'zgartirish (ixtiyoriy)
            card.parentElement.style.backgroundColor = '#f0f0f0';
        });
        card.addEventListener('mouseleave', () => {
            card.parentElement.style.backgroundColor = '#f8f9fa';
        });
    });
}

renderCategories();


//Numbers Animation
const statsSection = document.querySelector('#stats-counter');
const counters = document.querySelectorAll('.stat-number');

const startCounter = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Tezlikni sozlash (qancha kichik bo'lsa shuncha tez)
      const speed = target / 100; 

      if (count < target) {
        counter.innerText = Math.ceil(count + speed);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString(); // 10,000 ko'rinishida
      }
    };
    updateCount();
  });
};

// Scroll monitoring (Faqat section ko'ringanda boshlanadi)
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    startCounter();
    observer.unobserve(statsSection); // Faqat bir marta ishlashi uchun
  }
}, { threshold: 0.5 });

observer.observe(statsSection);

//Carousel

const slides = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

// Avtomatik aylanish (ixtiyoriy)
setInterval(() => {
  nextBtn.click();
}, 5000);


//Last Card JS
const blogData = [
    {
        date: "3, Mei 2021",
        read: "3 min read",
        title: "Yaqin kunlarda bizning jamoamiz tomonidan hackathon tashkil etilmoqda.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        date: "3, Mei 2021",
        read: "3 min read",
        title: "Right Triangle Trigonometry Explained",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
        date: "3, Mei 2021",
        read: "3 min read",
        title: "2 Reasons Why You're Confusing Chemistry",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    }
];

const blogGrid = document.getElementById('blogGrid');

// Cardlarni render qilish
function renderCards() {
    blogGrid.innerHTML = blogData.map(post => `
        <div class="blog-card">
            <div class="card-image"></div>
            <div class="card-content">
                <div class="card-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.read}</span>
                </div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-text">${post.desc}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    `).join('');
}

// Interaktiv manipulyatsiya: Sichqoncha harakatiga qarab yengil burilish (Tilt effect)
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const dx = x - xc;
            const dy = y - yc;
            // Cardni yengil burish
            card.style.transform = `perspective(1000px) rotateX(${-dy/20}deg) rotateY(${dx/20}deg) translateY(-10px)`;
        } else {
            card.style.transform = '';
        }
    });
});

renderCards();


// Footer JS
// Elementlarni tanlaymiz
const headerSearch = document.querySelector('.search-box input');
const overlayEl = document.querySelector('.search-overlay');
const bodyEl = document.body;
const coursesSection = document.querySelector('.courses');

// Qidiruv funksiyasi
function smartSearch(event) {
    const val = event.target.value.toLowerCase().trim();

    if (val.length > 0) {
        // Effektni yoqish
        bodyEl.classList.add('search-active');
        
        // Kurslar bo'limiga yumshoq siljish
        coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Input bo'sh bo'lsa hammasini o'z holiga qaytarish
        bodyEl.classList.remove('search-active');
    }

    // Filtrlash (Sening 'products' massivingdan foydalanadi)
    const filtered = products.filter(item => {
        // Agar ob'ektda keywords bo'lmasa, xato bermasligi uchun tekshiramiz
        const hasKeywords = item.keywords ? item.keywords.some(k => k.toLowerCase().includes(val)) : false;
        
        return (
            item.name.toLowerCase().includes(val) || 
            item.category.toLowerCase().includes(val) ||
            hasKeywords
        );
    });

    // Sening mavjud funksiyang orqali natijani chiqarish
    displayCourses(filtered);
}

// Inputga yozishni boshlaganda
headerSearch.addEventListener('input', smartSearch);

// Overlay (oq fon) bosilganda qidiruvni yopish
overlayEl.addEventListener('click', () => {
    headerSearch.value = '';
    bodyEl.classList.remove('search-active');
    displayCourses(products); // Hamma kurslarni qaytarish
});

//


