$(document).ready( () => {

    $("body").hide().fadeIn(1000);


    //secciones skillset
    $('[data-bs-toggle="tooltip"]').tooltip();





    //puntero personalizado
    $(document).mousemove(function(){
        $("html").css("cursor","none");

        var sigueme = $("#sigueme");
        sigueme.css("left",event.pageX)
                .css("top",event.pageY);
    });

    $("a, .btn").css("cursor","none");
    




    //scroll arriba de la web
    var subir = $("#subir");
    subir.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });





    //scroll links
    
    var link_about = $("#link_about");
    link_about.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#about").offset().top)
        }, 800);
    });


    var link_skillset = $("#link_skillset");
    link_skillset.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#about").offset().top)
        }, 800);
    });


    var link_servicios = $("#link_servicios");
    link_servicios.click((e) => {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#servicios").offset().top)
        }, 800);
    });


    var link_seccion_portafolio = $("#link_seccion_portafolio");
    link_seccion_portafolio.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#seccion-portafolio").offset().top)
        }, 800);
    });


    var link_formacion = $("#link_formacion");
    link_formacion.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#formacion").offset().top)
        }, 1000);
    });


    var link_contacto = $("#link_contacto, #link-contacto-tit");
    link_contacto.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#contacto").offset().top)
        }, 1000);
    });





    //animated box projects
    // let box_projects = document.querySelectorAll(".animated_box");
    
    // function mostrarProjects(){
    //     let scrollTop = document.documentElement.scrollTop; //detectamos la cantidad de scroll
    //     for (let i in box_projects) {
    //         let alturaBoxProjects = box_projects[i].offsetTop; //detectamos la altura del inicio a los proyectos
    //         if(alturaBoxProjects - 500 < scrollTop){
    //             box_projects[i].style.opacity = 1;
    //             box_projects[i].classList.add("animate_up");
    //         }
    //     }
    // }

    // window.addEventListener("scroll",mostrarProjects);





    

    //form validation
    var email = document.getElementById("email");
    email.addEventListener("input",validar,false);

    var boton = document.getElementById("boton-form").addEventListener("click",resetear,false);

    function validar(){
        if(email.value == ""){
            email.setCustomValidity("Introduce un email correcto");
            email.style.background = "#ffdddd";
        }else {
            email.style.background = "#00F8B6";
            email.setCustomValidity("");
        }
    }

    function resetear(){
        if(email.value != ""){
            alert("Mensaje enviado");
            email.value = "";
            email.style.background = "white";
        }
    }







});