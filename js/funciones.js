$(document).ready (function(){

    $(window).scroll(function(event){

        //sentido de arriba a abajo
        var scrolltop = $(window).scrollTop();
        var ancho_ventana = $(window).width();
        var ventana_top = $(".cv_ventana").offset().top;
        var movX = -scrolltop + ventana_top;
        //Si hay mas scrolltop que ventana top y menos que ventana_top más el doble de ancho de pantalla se hace el scroll

        if ( scrolltop >= ventana_top && scrolltop < ventana_top + 2*ancho_ventana) {
            $(".cv_tira").css("transform" , "translateX("+ movX +"px)");
        }

        else if (scrolltop < ventana_top){
            $(".cv_tira").css("transform" , "translateX(0px)");
        }

        else if (scrolltop > ventana_top + ancho_ventana){
            var posicion_final = ancho_ventana*2;
            $(".cv_tira").css("transform" , "translateX(-"+posicion_final+"px)");
        }

        
        console.log(scrolltop);
        console.log(ventana_top);
    });

    $(".burger").click(function(){
        $(".menu_desplegable").toggleClass("desplegado");
    });
});