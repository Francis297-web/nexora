// ======================================================
// NEXORA TECHNOLOGIES
// Elite Platform Script v4.0
// Part 1
// ======================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ======================================================
// FIREBASE CONFIGURATION
// Replace with your own Firebase credentials.
// ======================================================

const firebaseConfig={

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_AUTH_DOMAIN",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_STORAGE_BUCKET",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID"

};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

// ======================================================
// WAIT UNTIL PAGE LOADS
// ======================================================

document.addEventListener("DOMContentLoaded",()=>{

// ======================================================
// MOBILE MENU
// ======================================================

const hamburger=document.getElementById("hamburger");

const nav=document.getElementById("nav");

if(hamburger && nav){

hamburger.addEventListener("click",()=>{

nav.classList.toggle("active");

hamburger.classList.toggle("open");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

hamburger.classList.remove("open");

});

});

}

// ======================================================
// STICKY HEADER
// ======================================================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(6,10,22,.95)";

header.style.boxShadow="0 10px 35px rgba(0,0,0,.45)";

}

else{

header.style.background="rgba(5,8,18,.72)";

header.style.boxShadow="none";

}

});

// ======================================================
// SMOOTH SCROLL
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

}

});

});

// ======================================================
// ANIMATED COUNTERS
// ======================================================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=Number(counter.dataset.target);

let current=0;

const increment=Math.ceil(target/120);

const update=()=>{

current+=increment;

if(current>=target){

counter.innerText=target;

}

else{

counter.innerText=current;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ======================================================
// GOLD BUTTON RIPPLE EFFECT
// ======================================================

document.querySelectorAll(".gold-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});

// ======================================================
// GLASS CARD HOVER EFFECT
// ======================================================

document.querySelectorAll(

".service,.market-card,.project-card,.developer-card,.price-card,.cloud-card,.ai-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,215,0,.12),
rgba(255,255,255,.05) 45%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});

// ======================================================
// FIRESTORE CONTACT FORM
// ======================================================

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const inputs=contactForm.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.borderColor="red";

}else{

input.style.borderColor="#FFD700";

}

});

if(!valid){

alert("Please complete all required fields.");

return;

}

try{

await addDoc(collection(db,"project_requests"),{

name:inputs[0].value,

email:inputs[1].value,

project:inputs[2].value,

description:inputs[3].value,

created:new Date()

});

alert("Project request submitted successfully!");

contactForm.reset();

}

catch(err){

console.error(err);

alert("Unable to submit your request.");

}

});

}

// ======================================================
// FLOATING WHATSAPP BUTTON
// ======================================================

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},3500);

}

});
// ======================================================
// NEXORA ELITE SCRIPT v4.0
// PART 2A
// Scroll Reveal • Active Nav • Progress Bar
// ======================================================

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(`
.section-header,
.service,
.market-card,
.project-card,
.developer-card,
.cloud-card,
.ai-card,
.price-card,
.testimonial,
.contact-form,
.stat
`);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.18
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active-link");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active-link");

}

});

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progress=document.createElement("div");

progress.id="progressBar";

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.zIndex="999999";

progress.style.background="linear-gradient(90deg,#FFD700,#3B82F6)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(winScroll/height)*100;

progress.style.width=percent+"%";

});

// ==========================================
// PARALLAX HERO
// ==========================================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=(offset*0.35)+"px";

}

});

// ==========================================
// BUTTON SHINE EFFECT
// ==========================================

document.querySelectorAll(".gold-btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=`
radial-gradient(circle at ${x}px ${y}px,
#fff6b8,
#FFD700 45%,
#FFC107 90%)
`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="#FFD700";

});

});

// ==========================================
// IMAGE ZOOM EFFECT
// ==========================================

document.querySelectorAll(".project-card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ==========================================
// FLOATING CARDS
// ==========================================

document.querySelectorAll(

".market-card,.service,.cloud-card,.ai-card"

).forEach((card,index)=>{

setInterval(()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000+(index*300),

iterations:1

});

},5000+(index*250));

});

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

const heroTitle=document.querySelector(".hero h1 span");

if(heroTitle){

const original=heroTitle.textContent;

heroTitle.textContent="";

let i=0;

const typing=setInterval(()=>{

heroTitle.textContent+=original.charAt(i);

i++;

if(i>=original.length){

clearInterval(typing);

}

},80);

}

// ==========================================
// RANDOM GLOW ON CARDS
// ==========================================

const glowCards=document.querySelectorAll(
".service,.market-card,.developer-card,.price-card"
);

setInterval(()=>{

const random=Math.floor(Math.random()*glowCards.length);

glowCards[random].style.boxShadow=
"0 0 35px rgba(255,215,0,.35)";

setTimeout(()=>{

glowCards[random].style.boxShadow="";

},1800);

},2500);

// ==========================================
// END OF PART 2A
// ==========================================
/* JavaScript animation helpers */

.hidden{
opacity:0;
transform:translateY(40px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.active-link{
color:#FFD700 !important;
}

#progressBar{
transition:width .15s linear;
}
// ======================================================
// NEXORA ELITE SCRIPT
// PART 2B
// ======================================================

// ================================
// BACK TO TOP BUTTON
// ================================

const backTop=document.createElement("button");

backTop.innerHTML="<i class='fas fa-arrow-up'></i>";

backTop.className="back-top";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show-top");

}else{

backTop.classList.remove("show-top");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ================================
// LOADING SCREEN
// ================================

const loader=document.createElement("div");

loader.className="page-loader";

loader.innerHTML=`

<div class="loader-logo">

<img src="images/nexora-logo.png">

<h2>NEXORA</h2>

</div>

`;

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("loader-hide");

setTimeout(()=>{

loader.remove();

},800);

},900);

});

// ================================
// TESTIMONIAL AUTO ROTATION
// ================================

const testimonials=document.querySelectorAll(".testimonial");

let testimonialIndex=0;

function rotateTestimonials(){

if(testimonials.length===0)return;

testimonials.forEach(card=>{

card.style.display="none";

});

testimonials[testimonialIndex].style.display="block";

testimonialIndex++;

if(testimonialIndex>=testimonials.length){

testimonialIndex=0;

}

}

if(testimonials.length>0){

rotateTestimonials();

setInterval(rotateTestimonials,4500);

}

// ================================
// CONTACT FORM MESSAGE
// ================================

const form=document.querySelector(".contact-form");

if(form){

const message=document.createElement("div");

message.className="form-message";

form.appendChild(message);

form.addEventListener("submit",()=>{

message.innerHTML="";

message.style.color="#FFD700";

message.textContent="Sending request...";

});

}

// ================================
// CARD CLICK ANIMATION
// ================================

document.querySelectorAll(

".service,.market-card,.project-card,.developer-card"

).forEach(card=>{

card.addEventListener("click",()=>{

card.animate([

{

transform:"scale(1)"

},

{

transform:"scale(.97)"

},

{

transform:"scale(1.02)"

},

{

transform:"scale(1)"

}

],{

duration:350

});

});

});

// ================================
// RANDOM PARTICLE EFFECT
// ================================

setInterval(()=>{

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},7000);

},700);

// ================================
// PERFORMANCE
// ================================

window.addEventListener("blur",()=>{

console.log("Nexora paused");

});

window.addEventListener("focus",()=>{

console.log("Welcome back to Nexora");

});

// ================================
// CONSOLE BRANDING
// ================================

console.log("%cNEXORA TECHNOLOGIES","font-size:28px;font-weight:bold;color:#FFD700;");

console.log("%cCode. Connect. Create Impact.","font-size:15px;color:#66aaff;");

// ================================
// VERSION
// ================================

console.log("Nexora Elite Platform v4.0 Loaded");
