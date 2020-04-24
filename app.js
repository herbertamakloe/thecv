var typed = new Typed(".typing", {
    strings: [
        "Welcome",
        "Akwaaba",
        "欢迎",
        "Accueil",
        "Bienvenido",
        "Willkommen"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    showCursor: false
});

document.getElementById('workflow').addEventListener("click", function () {
    document.getElementById('workflow_page').style.left = "0";

    if (document.getElementById('workflow_page').style.left = "0") {
        document.querySelector('.workflow_page .text_content').classList.add('slideInRight');
        document.querySelector('.workflow_page .img_content').classList.add('slideInLeft');
    }

    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('cv_download_page').style.left = "-1370px";

    document.getElementById('header').style.display = "none";

    homeBtnColorChange();
});

document.getElementById('portfolio').addEventListener("click", function () {
    document.getElementById('portfolio_page').style.left = "0";

    document.getElementById('workflow_page').style.left = "-1370px";
    document.getElementById('cv_download_page').style.left = "-1370px";

    document.getElementById('header').style.display = "none";

    homeBtnColorChange();
});

document.getElementById('download').addEventListener("click", function () {
    document.getElementById('cv_download_page').style.left = "0";

    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('workflow_page').style.left = "-1370px";

    document.getElementById('header').style.display = "none";

    homeBtnColorChange();
});

document.getElementById('home_btn').addEventListener("click", function () {
    document.getElementById('cv_download_page').style.left = "-1370px";
    document.getElementById('portfolio_page').style.left = "-1370px";
    document.getElementById('workflow_page').style.left = "-1370px";

    document.getElementById('home_btn').style.background = "#606060";
    document.getElementById('home_btn').style.color = "#aeaeae";

    document.getElementById('header').style.display = "block";
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


function notice() {
    setTimeout(() => {
        document.getElementById('onload_notice').style.display = "block";
    }, 5000);

    document.querySelector('.prompt_close_btn').addEventListener('click', function () {
        document.getElementById('onload_notice').style.display = "none";
    });
}









function homeBtnColorChange() {
    document.getElementById('home_btn').style.background = "#407F3E";
    document.getElementById('home_btn').style.color = "#fff";
}