$(document).ready(function () {



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






    //scroll subir
    var subir = $("#subir a");
    subir.click((e) => {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


});