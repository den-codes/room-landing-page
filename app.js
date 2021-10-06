const carouselSlide = document.querySelector('.carousel');
const carouselImg = document.querySelectorAll('.carousel img');

const mobileSlide = document.querySelector('.carousel_mobile');
const mobileImg = document.querySelectorAll('.carousel_mobile img');


const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click',()=>{
    if (counter >= carouselImg.length-1) return;
    carouselSlide.style.transition ='transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prev.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition ='transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id === 'lastclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImg[counter].id === 'firstclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length-counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


let counterM = 1;
const sizeM = mobileImg[0].clientWidth;

mobileSlide.style.transform = 'translateX(' + (-sizeM * counterM) + 'px)';

next.addEventListener('click',()=>{
    if (counterM >= mobileImg.length-1) return;
    mobileSlide.style.transition ='transform 0.4s ease-in-out';
    counterM++;
    mobileSlide.style.transform = 'translateX(' + (-sizeM * counterM) + 'px)';
});
prev.addEventListener('click',()=>{
    if (counterM <= 0) return;
    mobileSlide.style.transition ='transform 0.4s ease-in-out';
    counterM--;
    mobileSlide.style.transform = 'translateX(' + (-sizeM * counterM) + 'px)';
});

mobileSlide.addEventListener('transitionend', ()=>{
    if(mobileImg[counterM].id === 'mobile_lastclone'){
        mobileSlide.style.transition = "none";
        counterM = mobileImg.length-2;
        mobileSlide.style.transform = 'translateX(' + (-sizeM * counterM) + 'px)';
    }
    if(mobileImg[counterM].id === 'mobile_firstclone'){
        mobileSlide.style.transition = "none";
        counterM = mobileImg.length-counterM;
        mobileSlide.style.transform = 'translateX(' + (-sizeM * counterM) + 'px)';
    }
});
/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide")

    if(n > slides.length){ slideIndex = 1}
    if (n < 1) { slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}*/