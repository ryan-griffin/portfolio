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

// opens and closes the mobile navigation links
function expand() {
    var x = document.getElementById("hamburger_links");
    var y = document.getElementById("hamburger");
    if (x.style.width === "200px") {
        x.style.width = "0";
        y.style.backgroundImage = "url(images/hamburger.png)";
    } else {
        x.style.width = "200px";
        y.style.backgroundImage = "url(images/close.png)";
    }
}
