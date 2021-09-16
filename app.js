const carouselSlide = document.querySelector('.carousel');
const carouselImg = document.querySelectorAll('.carousel img');

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