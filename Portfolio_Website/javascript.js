// function to set theme
function set_theme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggle_theme() {
    if (localStorage.getItem('theme') === 'dark_theme') {
        set_theme('light_theme');
    } else {
        set_theme('dark_theme');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'light_theme') {
        set_theme('light_theme');
    } else {
        set_theme('dark_theme');
    }
})();