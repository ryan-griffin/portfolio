show_hide = () => document.querySelector("nav").classList.toggle("show");
hide = () => document.querySelector("nav").classList.remove("show");

skills = document.getElementById("skills");
projects = document.getElementById("projects");
certifications = document.getElementById("certifications");
resume = document.getElementById("resume");
document.addEventListener("scroll", () => {
    clientheight = document.documentElement.clientHeight;
    skillsY = skills.getBoundingClientRect().y;
    skillsheight = skills.getBoundingClientRect().height;
    projectsY = projects.getBoundingClientRect().y;
    projectsheight = projects.getBoundingClientRect().height;
    certificationsY = certifications.getBoundingClientRect().y;
    certificationsheight = certifications.getBoundingClientRect().height;
    resumeY = resume.getBoundingClientRect().y;
    resumeheight = resume.getBoundingClientRect().height;
    if (clientheight > skillsY + (skillsheight * 1) / 2) {
        skills.classList.add("animate-skills");
    }
    if (clientheight > projectsY + (projectsheight * 1) / 2) {
        projects.classList.add("animate-projects");
    }
    if (clientheight > certificationsY + (certificationsheight * 1) / 2) {
        certifications.classList.add("animate-certifications");
    }
    if (resumeheight > resumeY + (resumeheight * 1) / 2) {
        resume.classList.add("animate-resume");
    }
});

slideIndex = showSlides(1, "slide");
slideIndex2 = showSlides(1, "slide2");
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
