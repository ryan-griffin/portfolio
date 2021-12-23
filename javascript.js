function button_press() {
    document.querySelector("nav").classList.toggle("open");
}

function link_press() {
    document.querySelector("nav").classList.toggle("open");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var x;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (x = 0; x < slides.length; x++) {
      slides[x].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";
}