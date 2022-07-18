$(document).ready(function(){

    //efecto fadeIn
    // $("body").hide().fadeIn(3000);


    // fancybox
    $("#galeria a").fancybox({
        opacity:true,
        transitionIn:"elastic",
        transitionOn:"elastic",
        titlePosition:"over",
        easingIn:"easeInSine",
        speedIn:500,
        speedOut:500,
        cyclic:true,
    });
});