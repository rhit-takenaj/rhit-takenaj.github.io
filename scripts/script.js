let html = document.getElementById("html");
const theme_icon = document.getElementById("theme_icon");

const home_button = document.getElementsByClassName("home_button")[0];
home_button.addEventListener("click", function() {
    changeWebPage("index");
});

const resume_button = document.getElementsByClassName("resume_button")[0];
resume_button.addEventListener("click", function() {
    changeWebPage("resume");
});

const portfolio_button = document.getElementsByClassName("portfolio_button")[0];
portfolio_button.addEventListener("click", function() {
    changeWebPage("portfolio");
});

const toggle_theme = document.getElementsByClassName("toggle_theme")[0];
toggle_theme.addEventListener("click", function() {
    toggleDarkTheme()
});

function changeWebPage(page) {
    window.location.assign(page + ".html")
}


//nav buttons from https://www.w3schools.com/js/js_window_location.asp

function toggleDarkTheme() {
    let theme = html.classList[0];
    if(theme === "light") {
        html.classList.remove(html.classList[0]);
        html.classList.add("dark");
        console.log("theme_icon src before:" + theme_icon.src);
        toggle_theme.innerHTML = "<img src='media/sun.svg' alt='' id='theme_icon'>Light Theme";
        console.log("theme_icon src after:" + theme_icon.src);
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.remove(html.classList[0]);
        html.classList.add("light");
        console.log("theme_icon src before:" + theme_icon.src);
        toggle_theme.innerHTML = "<img src='media/moon.svg' alt='' id='theme_icon'>Dark Theme";
        console.log("theme_icon src after:" + theme_icon.src);
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    let theme = localStorage.getItem("theme");
    if(theme === "dark") {
        html.classList.remove(html.classList[0]);
        html.classList.add("dark");
        toggle_theme.innerHTML = "<img src='media/sun.svg' alt='' id='theme_icon'>Light Theme";
    }
}

//keeping theme consistent throughout page change from https://stackoverflow.com/questions/33176739/how-to-carry-across-changes-made-to-a-css-style-over-different-pages
