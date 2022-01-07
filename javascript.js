const show_hide = () => document.querySelector("nav").classList.toggle("show");

const hide = () => document.querySelector("nav").classList.remove("show");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let x;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2((slideIndex2 += n));
}

function showSlides2(n) {
    let y;
    let slides2 = document.getElementsByClassName("slide2");
    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }
    for (y = 0; y < slides2.length; y++) {
        slides2[y].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "flex";
}
