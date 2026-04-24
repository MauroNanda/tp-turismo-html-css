$(document).ready(function () {
    // 1. Filtros
    $('.btn-filtro').click(function () {
        const filtro = $(this).attr('data-filter');
        if (filtro === "all") {
            $('.filter-item').fadeIn(500);
        } else {
            $('.filter-item').hide();
            $('.filter-item.' + filtro).fadeIn(500);
        }
        $(this).addClass('btn-primary').removeClass('btn-outline-primary')
               .siblings().addClass('btn-outline-primary').removeClass('btn-primary');
    });

    // 2. Zoom Tarea 2
    $('.tarjeta-destino').hover(
        function() { $(this).addClass('zoom-animacion'); },
        function() { $(this).removeClass('zoom-animacion'); }
    );
});