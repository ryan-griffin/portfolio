const show_hide = () => document.querySelector("nav").classList.toggle("show");
const hide = () => document.querySelector("nav").classList.remove("show");

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const certifications = document.getElementById("certifications");
const resume = document.getElementById("resume");
document.addEventListener("scroll", () => {
    const clientheight = document.documentElement.clientHeight;
    const skillsY = skills.getBoundingClientRect().y;
    const skillsheight = skills.getBoundingClientRect().height;
    const projectsY = projects.getBoundingClientRect().y;
    const projectsheight = projects.getBoundingClientRect().height;
    const certificationsY = certifications.getBoundingClientRect().y;
    const certificationsheight = certifications.getBoundingClientRect().height;
    const resumeY = resume.getBoundingClientRect().y;
    const resumeheight = resume.getBoundingClientRect().height;
    if (clientheight > skillsY + (skillsheight * 2) / 3) {
        skills.classList.add("animate-skills");
    }
    if (clientheight > projectsY + (projectsheight * 2) / 3) {
        projects.classList.add("animate-projects");
    }
    if (clientheight > certificationsY + (certificationsheight * 2) / 3) {
        certifications.classList.add("animate-certifications");
    }
    if (resumeheight > resumeY + (resumeheight * 2) / 3) {
        resume.classList.add("animate-resume");
    }
});

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
