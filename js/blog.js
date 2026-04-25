$(document).ready(function(){

    // 1. Filtros de Categorías (Hero Section)
    $(".filter-btn").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('1000');
        }
    });

    // 1b. Filtros del Diario (Tags: Noticias, Eventos, Tips)
    $(".tag-btn").click(function(){
        // Cambiar estilos de botón activo
        $(".tag-btn").removeClass("active");
        $(this).addClass("active");
        
        var value = $(this).attr('data-filter');
        var $notas = $('.nota-principal, .nota-item'); // Seleccionar todos los artículos a filtrar

        if(value == "all") {
            $notas.show(500);
        } else {
            $notas.not('.'+value).hide(500);
            $notas.filter('.'+value).show(500);
        }
    });

    // 2. Botón Ver más / Ver menos
    $(".comentario-item").not(":first").addClass("comentario-extra").hide();

    $("#btn-comentarios").click(function(){
        // Al terminar el slideToggle, corremos la función de scroll para que revelen suavemente
        $(".comentario-extra").slideToggle(500, function() {
            checkReveal(); 
        });
        
        var $btn = $(this);
        setTimeout(function() {
            var abierto = $(".comentario-extra").is(":visible");
            $btn.text(abierto ? "Ver menos" : "Ver más comentarios");
        }, 50);
    });

    // 3. Animación de scroll limpia (Usando clases CSS)
    function checkReveal() {
        $('.reveal').each(function() {
            // Solo procesamos elementos que no estén ocultos por display:none
            if ($(this).is(':visible')) {
                var top_of_element = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > top_of_element - 50) { // -50px de margen para que se vea antes
                    $(this).addClass('active');
                }
            }
        });
    }

    $(window).scroll(checkReveal);
    checkReveal(); // Ejecutar al cargar la página por primera vez
});