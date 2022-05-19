$(document).ready(function () {


    //aviso cookies
    let aceptarCookies = document.querySelector(".aceptarCookies");
    let divCookies = document.getElementById("divCookies");
    let overlay = document.getElementById("overlay");

    if(sessionStorage.getItem('cookies_aceptadas')){
        divCookies.style.display = "none";
        overlay.style.display = "none";
    }

    aceptarCookies.addEventListener("click", () => {
        divCookies.style.display = "none";
        overlay.style.display = "none";

        sessionStorage.setItem('cookies_aceptadas', true);
    });






    //search
    let buscador = $(".search-form").hide();

    $("#btn-search").click(() => {
        buscador.slideDown(500);
    });

    $("#close-search").click(() => {
        buscador.slideUp(500);
    });







    //jquery nav
    var $nav = $('#nav');

    $nav.responsiveNav({
        smallWidthMax: 730,
        generateSubSectionLinks: false,
        sectionSecondTapGo: true,
        hoverIntentTime: 200
    });







    // animation start
    // $(".loading").show()
    // $("#container").hide()
    // $nav.hide();
    // setTimeout(() => {
    //     $(".loading").hide()
    //     $("#container").show()
    //     $nav.show();
    // },2000);






    //scroll subir
    var subir = $("#subir a");
    subir.click((e) => {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


});