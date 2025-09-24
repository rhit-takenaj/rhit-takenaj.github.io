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

const dark_theme = document.getElementsByClassName("dark_theme")[0];
dark_theme.addEventListener("click", function() {
    toggleDarkTheme()
});

function changeWebPage(page) {
    window.location.assign(page + ".html")
}

function toggleDarkTheme(cur_theme) {
    let html = document.getElementById("html");
    let theme = html.classList[0];
    if(theme === "dark") {
        html.classList.remove(html.classList[0]);
        html.classList.add("light");
        dark_theme.innerHTML = "Light Theme";
    } else {
        if(theme === "light") {
            html.classList.remove(html.classList[0]);
            html.classList.add("dark");
            dark_theme.innerHTML = "Dark Theme";
        } else {
            html.classList.remove(html.classList[0]);
            html.classList.add("light");
            dark_theme.innerHTML = "Light Theme";
        }
    }

}

//nav buttons from https://www.w3schools.com/js/js_window_location.asp