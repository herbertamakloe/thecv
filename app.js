var typed = new Typed(".typing", {
    strings: [
        "Welcome",
        "Akwaaba",
        "欢迎",
        "Accueil",
        "Bienvenido",
        "Willkommen",
        // "Arabic"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    showCursor: false
});

document.getElementById('workflow').addEventListener("click", function () {
    document.getElementById('workflow_page').style.left = "0";

    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('cv_download_page').style.left = "-1370px";

    homeBtnColorChange();
});

document.getElementById('portfolio').addEventListener("click", function () {
    document.getElementById('portfolio_page').style.left = "0";

    document.getElementById('workflow_page').style.left = "-1370px";
    document.getElementById('cv_download_page').style.left = "-1370px";

    homeBtnColorChange();
});

document.getElementById('download').addEventListener("click", function () {
    document.getElementById('cv_download_page').style.left = "0";

    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('workflow_page').style.left = "-1370px";

    homeBtnColorChange();
});

document.getElementById('home_btn').addEventListener("click", function () {
    document.getElementById('cv_download_page').style.left = "-1370px";
    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('workflow_page').style.left = "-1370px";

    document.getElementById('home_btn').style.background = "#606060";
    document.getElementById('home_btn').style.color = "#aeaeae";
});


document.getElementById('menu_open').addEventListener("click", function () {
    document.getElementById('all_nav').style.left = "0";
    document.getElementById('menu_open').style.display = "none";
    document.getElementById('menu_close').style.display = "block";
});

document.getElementById('menu_close').addEventListener("click", function () {
    document.getElementById('all_nav').style.left = "-240px";
    document.getElementById('menu_open').style.display = "block";
    document.getElementById('menu_close').style.display = "none";
});




function homeBtnColorChange() {
    document.getElementById('home_btn').style.background = "#407F3E";
    document.getElementById('home_btn').style.color = "#fff";
}
