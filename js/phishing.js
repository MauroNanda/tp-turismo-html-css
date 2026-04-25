$(document).ready(function() {
    let trampasEncontradas = 0;
    const totalTrampas = $('.trampa').length;

    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Resetear modal al abrir
    $('#modalPhishing').on('show.bs.modal', function () {
        trampasEncontradas = 0;
        $('#contador-phishing').text(trampasEncontradas);
        $('.trampa').removeClass('encontrada').popover('dispose');
        $('.mensaje-felicitacion').remove();
    });

    // Interacción al hacer clic en una trampa
    $('.trampa').on('click', function(e) {
        e.preventDefault();
        
        // Si ya fue encontrada, no hacer nada
        if ($(this).hasClass('encontrada')) return;

        // Marcar como encontrada
        $(this).addClass('encontrada');
        
        // Incrementar contador
        trampasEncontradas++;
        $('#contador-phishing').text(trampasEncontradas);

        // Mostrar popover con la explicación usando la info en data-explicacion
        const explicacion = $(this).data('explicacion');
        $(this).popover({
            title: '<i class="fa-solid fa-triangle-exclamation text-warning"></i> Señal de Phishing',
            content: explicacion,
            html: true,
            placement: 'top',
            trigger: 'manual'
        }).popover('show');

        // Ocultar popover al cabo de unos segundos
        setTimeout(() => {
            $(this).popover('hide');
        }, 4000);

        // Chequear victoria
        chequearVictoria();
    });

    // Botón "Revelar Todo"
    $('#btn-revelar-trampas').on('click', function() {
        $('.trampa:not(.encontrada)').each(function() {
            $(this).addClass('encontrada');
            trampasEncontradas++;
        });
        $('#contador-phishing').text(trampasEncontradas);
        chequearVictoria();
    });

    function chequearVictoria() {
        if (trampasEncontradas === totalTrampas) {
            if ($('.mensaje-felicitacion').length === 0) {
                const mensaje = $('<div class="alert alert-success mensaje-felicitacion mt-4 text-center" style="display:none;"><i class="fa-solid fa-check-circle fs-4 mb-2"></i><br><strong>¡Felicidades!</strong> Has encontrado todas las señales de fraude. Mantente siempre alerta y nunca compartas tus datos personales.</div>');
                $('.email-simulado').after(mensaje);
                mensaje.fadeIn(800);
            }
        }
    }
});
