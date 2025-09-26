let html = document.getElementById("html");

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
        toggle_theme.innerHTML = "<img src='media/sun.svg' alt=''> Light Theme";
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.remove(html.classList[0]);
        html.classList.add("light");
        toggle_theme.innerHTML = "<img src='media/moon.svg' alt=''> Dark Theme";
        localStorage.setItem("theme", "light");
    }
}

//icon update from https://stackoverflow.com/questions/35742199/how-to-add-image-to-button-via-javascript

window.onload = function() {
    let theme = localStorage.getItem("theme");
    if(theme === "dark") {
        html.classList.remove(html.classList[0]);
        html.classList.add("dark");
        toggle_theme.innerHTML = "<img src='media/sun.svg' alt=''> Light Theme";
    }
    setFourBoxesHeight();
}

function setFourBoxesHeight() {
    let fourBoxes = document.getElementsByClassName("four_boxes");
    let height = 0;
    console.log("height is now " + height);
    for(let i=0; i<fourBoxes.length; i++) {
        if(fourBoxes[i].height > height) {
            height = fourBoxes[i].height;
            console.log("height is now " + height);
        }
    }
    fourBoxes.style.height = height;
    console.log("the heigh of all the boxes is " + height);
}

//keeping theme consistent throughout page change from https://stackoverflow.com/questions/33176739/how-to-carry-across-changes-made-to-a-css-style-over-different-pages
