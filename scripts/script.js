const home_button = document.getElementsByClassName("home_button")[0];
home_button.addEventListener("click", function() {
    changeWebPage("home");
});

const resume_button = document.getElementsByClassName("resume_button")[0];
resume_button.addEventListener("click", function() {
    changeWebPage("resume");
});

const portfolio_button = document.getElementsByClassName("portfolio_button")[0];
portfolio_button.addEventListener("click", function() {
    changeWebPage("portfolio");
});

function changeWebPage(page) {
    window.location.assign(page + ".html")
}

//nav buttons from https://www.w3schools.com/js/js_window_location.asp