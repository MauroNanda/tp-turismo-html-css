// Cuando el DOM este cargado
$(document).ready(function() {
    
    // 1. Animaciones del Hero
    // Aseguramos que inicialmente esten ocultos por CSS en index.html o los ocultamos rapido
    $('.hero-content h1').hide().fadeIn(1500);
    $('.hero-content p').hide().delay(400).fadeIn(1200);
    $('.btn-hero').hide().delay(800).fadeIn(1000);

    // 2. Contador Numerico Animado
    // Verifica si la propiedad IntersectionObserver esta disponible para animar solo cuando scrolleamos
    if ('IntersectionObserver' in window) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Se dispara cuando el 50% del contador es visible
        };

        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Animamos solo la primera vez y cortamos la observacion
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(document.querySelector('.estadisticas-container'));
    } else {
        // Fallback si no soporta IntersectionObserver
        animateCounters();
    }

    // Funcion core que hace la animacion numera con .animate()
    function animateCounters() {
        $('.counter').each(function() {
            var $this = $(this);
            var target = parseInt($this.data('target'));
            var prefix = $this.data('prefix') || '';
            
            // Inicia en 0 y anima hasta el target
            $({ count: 0 }).animate({ count: target }, {
                duration: 2500, // 2.5 segundos
                easing: 'swing',
                step: function() {
                    // Actualizamos subiendo la cuenta
                    $this.text(prefix + Math.ceil(this.count));
                },
                complete: function() {
                    // Resultado final clavado en target
                    $this.text(prefix + target);
                }
            });
        });
    }

});
