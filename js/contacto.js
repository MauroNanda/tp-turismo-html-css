$(document).ready(function() {
    const $form = $('#form-contacto');
    const $nombre = $('#nombre');
    const $email = $('#email');
    const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));

    // 1. Sanitización y Validación en tiempo real (Input Event)
    $nombre.on('input', function() {
        // Sanitización: Solo permite letras y espacios
        let valor = $(this).val().replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
        $(this).val(valor);

        if (valor.length >= 3) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    $email.on('input', function() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test($(this).val())) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    // 2. Manejo del Submit con jQuery
    $form.on('submit', function(e) {
        e.preventDefault();

        // Validar si el formulario de Bootstrap es válido
        if (this.checkValidity() === false || $('.is-invalid').length > 0) {
            e.stopPropagation();
            $form.addClass('was-validated');
            return;
        }

        // Efecto de carga (Spinner)
        $('#btn-text').text('Procesando...');
        $('#btn-spinner').removeClass('d-none');
        $('#btn-enviar').prop('disabled', true);

        // Simulación de envío (2 segundos)
        setTimeout(() => {
            modalExito.show(); // Mostrar modal de Bootstrap
            
            // Resetear todo
            $form[0].reset();
            $form.removeClass('was-validated');
            $('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
            
            // Restaurar botón
            $('#btn-text').text('Enviar Mensaje');
            $('#btn-spinner').addClass('d-none');
            $('#btn-enviar').prop('disabled', false);
        }, 2000);
    });
});