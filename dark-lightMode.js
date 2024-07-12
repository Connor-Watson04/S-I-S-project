const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.querySelector('body')



// dark or light images

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight
        ? "rgb(225 225 225 / 50%)"
        : "rgb(0 0 0 / 50%)";

    toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
    isLight
        ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
        : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

    body.style.backgroundColor = isLight ? "rgb(225 225 225 / 50%)" : "#d3d2d0";


}

// switch dynamic theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode(true);
    }
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// check local storage for theme

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    } else {
        toggleSwitch.checked = false;
        toggleDarkLightMode(true);
    }
}
