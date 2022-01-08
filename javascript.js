const show_hide = () => document.querySelector("nav").classList.toggle("show");
const hide = () => document.querySelector("nav").classList.remove("show");

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const certifications = document.getElementById("certifications");
const resume = document.getElementById("resume");
const animate_about = () => about.classList.add("animate-about");
const animate_projects = () => projects.classList.add("animate-projects");
const animate_certifications = () =>
    certifications.classList.add("animate-certifications");
const aniamte_resume = () => resume.classList.add("animate-resume");
function reanimate(section) {
    if (section == 1) {
        about.classList.remove("animate-about");
        setTimeout(animate_about);
    } else if (section == 2) {
        projects.classList.remove("animate-projects");
        setTimeout(animate_projects);
    } else if (section == 3) {
        certifications.classList.remove("animate-certifications");
        setTimeout(animate_certifications);
    } else if (section == 4) {
        resume.classList.remove("animate-resume");
        setTimeout(aniamte_resume);
    }
}

let slideIndex = 1;
showSlides(slideIndex);
const plusSlides = (n) => showSlides((slideIndex += n));
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
const plusSlides2 = (n) => showSlides2((slideIndex2 += n));
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
