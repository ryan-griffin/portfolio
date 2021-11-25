// function to set theme
function set_theme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggle_theme() {
    if (localStorage.getItem("theme") === "dark_theme") {
        set_theme("light_theme");
    } else {
        set_theme("dark_theme");
    }
}

// Immediately invoked function to set the theme on initial load
if (localStorage.getItem("theme") === "light_theme") {
    set_theme("light_theme");
} else {
    set_theme("dark_theme");
}

var x = document.getElementById("links");
var y = document.getElementById("hamburger")

function expand() {
    if (x.style.width === "200px" && localStorage.getItem("theme") === "dark_theme") {
        x.style.width = "0";
        y.style.backgroundImage = "images/hamburger.png";
    } else if (x.style.width === "0" && localStorage.getItem("theme") === "dark_theme") {
        x.style.width = "200px";
        y.style.backgroundImage = "images/close.png";
    } else if (x.style.width === "200px" && localStorage.getItem("theme") === "light_theme") {
        x.style.width = "0";
        y.style.backgroundImage = "images/hamburger_black.png";
    } else if (x.style.width === "0" && localStorage.getItem("theme") === "light_theme") {
        x.style.width = "200px";
        y.style.backgroundImage = "images/close_black.png";
    }
}