let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let oneState = document.querySelector('.one');
let twoState = document.querySelector('.two');
const sliderOverlay = document.querySelector('.slider-overlay');

prevButton.addEventListener('click', () => {
    if(!oneState.classList.contains('active')){
        oneState.classList.add('active');
        twoState.classList.remove('active');
        scrollToLeft();
    }
})

oneState.addEventListener('click', () => {
    if(!oneState.classList.contains('active')){
        oneState.classList.add('active');
        twoState.classList.remove('active');
        scrollToLeft();
    }
})

nextButton.addEventListener('click', () => {
    if(!twoState.classList.contains('active')){
        oneState.classList.remove('active');
        twoState.classList.add('active');
        scrollToRight();
    }
})

twoState.addEventListener('click', () => {
    if(!twoState.classList.contains('active')){
        oneState.classList.remove('active');
        twoState.classList.add('active');
        scrollToRight();
    }
})

function scrollToLeft() {
  sliderOverlay.scrollTo({
    left: 0,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  sliderOverlay.scrollTo({
    left: sliderOverlay.scrollWidth,
    behavior: 'smooth',
  });
}
