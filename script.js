'use strict'

const dotsContainer = document.querySelector('.dots');
const slides = document.querySelectorAll('.slide');

// SLIDER
let curSlide = 0;

const createDots = function(){
    slides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML('beforeend', `
        <div class="dots_dot" data-dot="${i}"></div>
        `);
    });
}

const activateDot = function(){
    const dots = document.querySelectorAll('.dots_dot');
    dots.forEach(dot => {
        dot.classList.remove('dots_dot-active');
    })
    document.querySelector(`.dots_dot[data-dot = "${curSlide}"]`).classList.add('dots_dot-active');
}

const goToSlide = function(slide){
    slides.forEach((sl, i) => {
        sl.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}

const nextSlide = function(){
    if(curSlide === slides.length - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot();
}

const init = function(){
    createDots();
    activateDot();
    goToSlide(0);
}
init();

setInterval(() => nextSlide(), 2000);
