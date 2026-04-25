$(document).ready(function(){

    // 1. Filtros de Categorías
    $(".filter-btn").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('1000');
        }
    });

    // 2. Botón Ver más / Ver menos
    // Primero, ocultamos los comentarios al cargar
    $(".comentario-item").not(":first").hide();

    $("#btn-comentarios").click(function(){
        var extras = $(".comentario-item").not(":first");
        extras.slideToggle(500);
        
        if ($(this).text().trim() === "Ver más comentarios") {
            $(this).text("Ver menos");
        } else {
            $(this).text("Ver más comentarios");
        }
    });

    // 3. Animación de scroll
    $(window).scroll(function() {
        $('.reveal').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_element) {
                $(this).animate({'opacity':'1'}, 1000);
            }
        });
    });

});