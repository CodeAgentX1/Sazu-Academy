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

{
id:1,
name:"General English",
category:"English",
price:"540 000",
oldPrice:"600 000",
rating:5,
image:"/images/other/usa.png"
},

{
id:2,
name:"Rus tili",
category:"Russian",
price:"490 000",
oldPrice:"550 000",
rating:4,
image:"/images/other/ru.png"
},


{
id:7,
name:"Turk tili",
category:"turk  ",
price:"600 000",
oldPrice:"670 000",
rating:5,
image:"/images/other/turkish.png"
},

{
id:8,
name:"Koreys tili",
category:"Koreys",
price:"600 000",
oldPrice:"670 000",
rating:4,
image:"/images/other/koreys.png"
},

{
id:9,
name:"Nemis tili",
category:"Nemis",
price:"600 000",
oldPrice:"670 000",
rating:4,
image:"/images/other/nemis.png"
},




{
id:3,
name:"Matematika",
category:"Math",
price:"490 000",
oldPrice:"550 000",
rating:5,
image:"/images/other/math2.png"
},


{
id:4,
name:"IT Frontend",
category:"IT",
price:"800 000",
oldPrice:"900 000",
rating:5,
image:"/images/other/frontend.png"
},


{
id:5,
name:"IT Backend",
category:"IT",
price:"800 000",
oldPrice:"900 000",
rating:5,
image:"/images/other/backend.png"
}
,






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

        <div class="rating">
            <span class="stars">${stars}</span>
        </div>

        <div class="price-section">
            <span class="old-price">${course.oldPrice} so'm</span>
            <span class="current-price">${course.price} so'm</span>
        </div>

        <a href="../pages/courses.html?id=${course.id}" class="details-btn">
            Batafsil
        </a>
    </div>
</div>
`;

    }).join('');
}

displayCourses(products);

// Background Cards
const categories = [
    { name: "Ingliz tili", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
    { name: "Rus tili", img: "/images/other/rassiya.png" },
    { name: "Dasturlash", img: "/images/other/dasturlash.png" },
    { name: "Matematika", img: "/images/other/matematika02.png" },
];

const container = document.querySelector('.categories-grid');

function renderCategories() {
    container.innerHTML = categories.map(item => `
        <div class="category-card" role="button" aria-label="${item.name}">
            
            <div class="img-wrapper">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>

            <div class="card-content">
                <h3>${item.name}</h3>
            </div>

        </div>
    `).join('');
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



