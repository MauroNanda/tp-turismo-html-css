// Carga el header y el footer desde archivos parciales e inyecta el HTML
async function cargarLayout() {
    try {
        // Cargar Header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const resHeader = await fetch('partials/header.html');
            if (resHeader.ok) {
                const htmlHeader = await resHeader.text();
                headerPlaceholder.innerHTML = htmlHeader;
            }
        }

        // Cargar Footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const resFooter = await fetch('partials/footer.html');
            if (resFooter.ok) {
                const htmlFooter = await resFooter.text();
                footerPlaceholder.innerHTML = htmlFooter;
            }
        }
    } catch (error) {
        console.error("Error cargando el layout:", error);
    }
}

// Ejecutar inmediatamente
cargarLayout();
