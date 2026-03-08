const courses = [

{
name:"General English",
price:"540 000",
duration:"6 oy",
image:"/images/other/english_flag2.png"
},

{
name:"Rus tili",
price:"490 000",
duration:"6 oy",
image:"/images/other/russian_flag2.png"
},

{
name:"Matematika",
price:"490 000",
duration:"6 oy",
image:"/images/other/math_flag2.png"
},

{
name:"IT Frontend",
price:"850 000",
duration:"6-7 oy",
image:"/images/other/frontend_flag.png"
},

{
name:"IT Backend",
price:"850 000",
duration:"6-7 oy",
image:"/images/other/backend_flag.png"
},

{
name:"IELTS Preparation",
price:"650 000",
duration:"6 oy",
image:"/images/other/ielts_pre_flag.png"
}

];

const container = document.querySelector(".all-courses");

function showCourses(){

container.innerHTML = courses.map(course => {

return `

<div class="course-card">

<img src="${course.image}" alt="">

<h3>${course.name}</h3>

<p>Davomiyligi: ${course.duration}</p>

<div class="course-price">

${course.price} so'm

</div>

</div>

`


}).join("");

}

showCourses();


const bonus = [
{
name:"English + IT Web",
price:"1 090 000",
image:"/images/other/english_IT.png"
},

{
name:"English + Matematika",
price:"850 000",
image:"/images/other/english_math3.png"
},

{
name:"English + Rus tili",
price:"850 000",
image:"/images/other/english_russian.png"
},

{
name:"Rus tili + Matematika",
price:"850 000",
image:"/images/other/russian_math.png"
}

];

const bonusContainer = document.querySelector(".bonus-cards");

function showBonus(){

bonusContainer.innerHTML = bonus.map(item => {

return `

<div class="bonus-card">

<div class="bonus-img">
<img src="${item.image}" alt="">
</div>

<div class="bonus-body">

<h3>${item.name}</h3>

<div class="bonus-price">
${item.price} so'm
</div>

</div>

</div>

`

}).join("");

}

showBonus();


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
