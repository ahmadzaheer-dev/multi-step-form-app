const carouselSlide = document.querySelector('.form');
const slides = document.querySelectorAll('.form .slide');
const nStep = document.querySelectorAll('.bar li').length;
console.log(nStep);

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
let counter = 0;
let step = 1;
const size = slides[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
for(let i = 1; i <= nStep ; i++){
    document.querySelector('#step-'+ i).classList.remove("bar__step--active");
    document.querySelector('#step-'+ i).classList.remove("bar__step--completed");
}
document.querySelector('#step-'+ step).classList.add("bar__step--active");

nextBtn.addEventListener('click', ()=>{
    if(counter >= slides.length -1) return;
    document.querySelector('#step-'+ step).classList.add("bar__step--completed");
    step++;
    if(step >=nStep){
        document.querySelector('#next-btn').style.display = "none";
        document.querySelector('#send-btn').style.display = "block";
    }
    if(step >= 1){
        document.querySelector('#prev-btn').style.display = "block";
    }
    document.querySelector('#step-'+ step).classList.add("bar__step--active");
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter<= 0) return;
    document.querySelector('#step-'+ step).classList.remove("bar__step--active");
    step--;
    if(step <= nStep){
        document.querySelector('#next-btn').style.display = "block";
        document.querySelector('#send-btn').style.display = "none";
    }
    if(step <= 1){
        document.querySelector('#prev-btn').style.display = "none";
    }
    document.querySelector('#step-'+ step).classList.remove("bar__step--completed");
    document.querySelector('#step-'+ step).classList.add("bar__step--active");
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
document.querySelectorAll('.bar .bar__step--active:before').color = "#ffffff";