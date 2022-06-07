show_hide = () => document.querySelector("nav").classList.toggle("show");
hide = () => document.querySelector("nav").classList.remove("show");

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
    if (clientheight > skillsY + (skillsheight * 1) / 2) {
        skills.classList.add("animate-skills");
    }
    if (clientheight > projectsY + (projectsheight * 1) / 2) {
        projects.classList.add("animate-projects");
    }
    if (clientheight > certificationsY + (certificationsheight * 1) / 2) {
        certifications.classList.add("animate-certifications");
    }
});

let slideIndex = showSlides(1, "slide");
let slideIndex2 = showSlides(1, "slide2");
function plusSlides(index, num, slideclass) {
    if (index == slideIndex) {
        slideIndex = showSlides(index + num, slideclass);
    } else if (index == slideIndex2) {
        slideIndex2 = showSlides(index + num, slideclass);
    }
}
function showSlides(index, slideclass) {
    slides = document.getElementsByClassName(slideclass);
    if (index > slides.length) {
        index = 1;
    } else if (index < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[index - 1].style.display = "flex";
    }
    return index;
}
