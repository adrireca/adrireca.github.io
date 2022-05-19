$(document).ready(function () {




    //scroll subir
    var subir = $("#subir a");
    subir.click((e) => {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });




    //more
    let divParrafoMas1 = $("#divParrafoMas1").hide();
    let divMore1 = $("#divMore1");
    divMore1.click(() => {
        divParrafoMas1.slideDown(500);
    });

    let less1 = $("#less1");
    less1.click(() => {
        divParrafoMas1.slideUp(500);
    });



    let divParrafoMas2 = $("#divParrafoMas2").hide();
    let divMore2 = $("#divMore2");
    divMore2.click(() =>{
        divParrafoMas2.slideDown(500);
    });

    let less2 = $("#less2");
    less2.click(() => {
        divParrafoMas2.slideUp(500);
    });

    
});