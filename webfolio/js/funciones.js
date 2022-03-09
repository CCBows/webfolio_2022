$(document).ready (function(){

    $(window).scroll(function(event){
        var scrolltop = - $(window).scrollTop();
        var ventana_top = $(".cv_ventana").offset().top;


        if ( scrolltop <= - ventana_top) {
            $(".cv_tira").css("transform" , "translateX("+ scrolltop+"px)");
        }

        
        console.log(scrolltop);
        console.log(ventana_top);
    });
});