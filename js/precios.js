$(document).ready(function () {
    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    //hover dinamico
    $('#tabla-precios tbody tr').on('mouseenter', function () {
        $(this).addClass('table-active');
    }).on('mouseleave', function () {
        $(this).removeClass('table-active');
    });
});