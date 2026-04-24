$(document).ready(function() {
    
    // --- Punto 1: Flip cards SOLO con el botón ---
    $('.btn-flip, .btn-volver').on('click', function(e) {
        // Evitamos que el clic afecte a otros elementos
        e.preventDefault();
        
        // Buscamos la tarjeta interna que contiene a este botón y le hacemos el toggle
        $(this).closest('.partner-card-inner').toggleClass('is-flipped');
    });

    // --- Punto 2: Rating interactivo (igual que antes) ---
    $('.rating-estrellas i').on('mouseenter', function() {
        let val = $(this).data('value');
        $(this).parent().find('i').each(function(index) {
            $(this).toggleClass('fas', index < val).toggleClass('far', index >= val);
        });
    });

    $('.rating-estrellas').on('mouseleave', function() {
        let guardado = $(this).data('rating') || 0;
        $(this).find('i').each(function(index) {
            $(this).toggleClass('fas', index < guardado).toggleClass('far', index >= guardado);
        });
    });

    $('.rating-estrellas i').on('click', function() {
        let val = $(this).data('value');
        $(this).parent().data('rating', val);
        alert("Calificación guardada: " + val + " estrellas.");
    });
});