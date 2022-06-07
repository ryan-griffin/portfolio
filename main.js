"use strict";

const show_hide = () => document.querySelector("nav").classList.toggle("show");
const hide = () => document.querySelector("nav").classList.remove("show");

document.addEventListener("scroll", () => {
    function anim(section, className) {
        if (
            document.documentElement.clientHeight >
            section.getBoundingClientRect().y +
                section.getBoundingClientRect().height / 2
        ) {
            section.classList.add(className);
        }
    }

    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const certifications = document.getElementById("certifications");

    anim(skills, "animate-skills");
    anim(projects, "animate-projects");
    anim(certifications, "animate-certifications");
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
    const slides = document.getElementsByClassName(slideclass);
    if (index > slides.length) {
        index = 1;
    } else if (index < 1) {
        index = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[index - 1].style.display = "flex";
    }
    return index;
}
