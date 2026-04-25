# Tareas — Fase 2: Bootstrap + jQuery

## Tarea 0: Configuracion Base (COMPLETADA)

Rama: main (commit directo)
Depende de: Ninguna

Descripcion:
Incorporar Bootstrap 5.3.3, jQuery 3.7.1 y Font Awesome 6.5.0 en las 6 paginas.
Reemplazar el navbar CSS-only por el componente navbar de Bootstrap con mega-menu dropdown.
Ajustar global.css para convivir con Bootstrap (eliminar bloques dark mode duplicados).
Crear estructura base: carpeta js/, carpeta images/sprites/, archivo css/sprites.css.

Archivos:
- css/global.css (modificado)
- css/header.css (reescrito)
- css/sprites.css (nuevo)
- js/.gitkeep (nuevo)
- images/sprites/.gitkeep (nuevo)
- index.html (modificado)
- destinos.html (modificado)
- agencias.html (modificado)
- precios.html (modificado)
- blog.html (modificado)
- contacto.html (modificado)

Estado: [x] Completada

---

## Tarea 1: Home — Hero jQuery + Contador animado

Rama: feature/home-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Hero con texto animado usando jQuery (fadeIn, delay)
- Contador animado con jQuery (.animate) reemplazando el contador CSS-only
- Carousel de testimonios: mantener o migrar a Bootstrap carousel
- Footer: reemplazar SVGs de redes sociales por iconos Font Awesome
- Agregar iconos Font Awesome en los items del navbar

Archivos:
- index.html (modificar)
- css/index.css (modificar)
- js/home.js (nuevo)

Estado: [x] Completada

---

## Tarea 2: Destinos — Filtros jQuery + Grid Bootstrap

Rama: feature/destinos-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Filtros dinamicos con jQuery (.filter, .hide, .show) reemplazando los radio buttons CSS-only
- Grid responsive con clases Bootstrap (row-cols-1, row-cols-md-2, row-cols-lg-3)
- Cards con efecto zoom usando jQuery (toggleClass)
- Tabla de precios responsive (table-responsive) agregada en esta pagina

Archivos:
- destinos.html (modificar)
- css/destinos.css (modificar)
- js/destinos.js (nuevo)

Estado: [x] Completada

---

## Tarea 3: Agencias — Flip Cards jQuery + Rating interactivo

Rama: feature/agencias-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Flip cards con jQuery toggle (clic en vez de hover)
- Sistema de rating con estrellas interactivo (jQuery mouseenter + click)
- Iconos Font Awesome en botones y aside

Archivos:
- agencias.html (modificar)
- css/agencias.css (modificar)
- js/agencias.js (nuevo)

Estado: [x] Completada

---

## Tarea 4: Precios — Tooltips Bootstrap + Hover dinamico

Rama: feature/precios-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Tabla con clases Bootstrap (table-responsive, table-bordered, table-hover)
- Tooltips Bootstrap activados con jQuery (reemplazar tooltips CSS-only)
- Hover dinamico con jQuery (addClass/removeClass table-active)
- Iconos Font Awesome reemplazando SVGs de check/X

Archivos:
- precios.html (modificar)
- css/precios.css (modificar)
- js/precios.js (nuevo)

Estado: [x] Completada

---

## Tarea 5: Contacto — Validacion jQuery + Modal Bootstrap

Rama: feature/contacto-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Validacion en tiempo real con jQuery (.on('input'), .val()) con sanitizacion
- Spinner de carga Bootstrap (spinner-border)
- Modal de confirmacion Bootstrap (.modal.fade)
- Mover script embebido a archivo externo js/contacto.js
- Layout con grid Bootstrap (col-md-7 + col-md-5)

Archivos:
- contacto.html (modificar)
- css/contacto.css (modificar)
- js/contacto.js (nuevo, reemplaza script embebido)

Estado: [x] Completada

---

## Tarea 6: Blog — Filtros jQuery + Scroll Animations

Rama: feature/blog-jquery
Depende de: Tarea 0
Puede iniciarse en paralelo: Si, tras merge de Tarea 0

Descripcion:
- Filtro por categorias con jQuery (.hide, .show) reemplazando radio buttons
- Animaciones al hacer scroll con jQuery ($(window).on('scroll'))
- Boton "Ver mas comentarios" con jQuery toggle
- Layout tipo revista verificado con clases Bootstrap

Archivos:
- blog.html (modificar)
- css/blog.css (modificar)
- js/blog.js (nuevo)

Estado: [x] Completada

---

## Tarea 6.5: Refactoring General — Bootstrap Local + Header/Footer Unificado

Rama: refactor/bootstrap-local-y-layout
Depende de: Tareas 1-6 completadas y mergeadas

Descripcion:
- Instalar Bootstrap de forma local (descargar CSS y JS, reemplazar los CDN en todos los HTML)
- Unificar Header y Footer: crear archivos parciales header.html y footer.html, e incluirlos en cada pagina mediante JavaScript (fetch + innerHTML) o alternativa acordada con el equipo

Archivos:
- vendor/bootstrap/ (nuevo directorio con los archivos locales de Bootstrap)
- index.html, destinos.html, agencias.html, precios.html, blog.html, contacto.html (modificar links de CDN y bloques de header/footer)
- Correcciones generales detectadas en revision de codigo (bugs menores, clases incompletas, etc.)


Estado: [x] Completada

---

## Tarea 7: Modulo Educativo — Simulacion de Phishing

Rama: feature/phishing-educativo
Depende de: Tarea 0 + Tarea 1 (esperar merge de Tarea 1 porque comparten index.html)
Puede iniciarse en paralelo: No, esperar Tarea 1

Descripcion:
- Boton "Simulacion de Phishing" en el Home
- Modal Bootstrap con advertencia educativa, ejemplos de fraude y senales
- Interaccion jQuery: usuario identifica elementos sospechosos, feedback visual
- NO se permite robo de datos reales

Archivos:
- index.html (modificar, tomar de main despues de Tarea 1)
- js/phishing.js (nuevo)
- css/phishing.css (nuevo, opcional)

Estado: [ ] Pendiente

---

## Tarea 8: Sprite CSS + Iconos en footers

Rama: feature/sprite-iconos
Depende de: Tarea 0 + Tareas 1-7 (esperar que todas mergeen para evitar conflictos en footers)
Puede iniciarse en paralelo: No, hacer al final

Descripcion:
- Crear imagen sprite (social-sprite.png) con iconos de Facebook, Instagram, Twitter
- Completar css/sprites.css con background-position para cada icono
- Reemplazar iconos de redes sociales en los 6 footers por el sprite

Archivos:
- images/sprites/social-sprite.png (nuevo)
- css/sprites.css (completar)
- index.html, destinos.html, agencias.html, precios.html, blog.html, contacto.html (modificar footers)

Estado: [ ] Pendiente

---

## Tarea 9: Documentacion + Deploy

Rama: docs/fase2-readme
Depende de: Todas las tareas anteriores
Puede iniciarse en paralelo: No, hacer al final

Descripcion:
- Actualizar README.md con tecnologias de Fase 2
- Deploy en GitHub Pages o Netlify
- Verificar responsive en todos los breakpoints
- Video presentacion

Archivos:
- README.md (modificar)

Estado: [ ] Pendiente

---

## Orden de ejecucion

Dia 1: Tarea 0 en main (COMPLETADA)

Paralelo tras Tarea 0:
- Tarea 1 (Home)
- Tarea 2 (Destinos)
- Tarea 3 (Agencias)
- Tarea 4 (Precios)
- Tarea 5 (Contacto)
- Tarea 6 (Blog)

Secuencial:
- Tarea 6.5 (Refactoring) -> espera Tareas 1-6
- Tarea 7 (Phishing) -> espera Tarea 1
- Tarea 8 (Sprite) -> espera Tareas 1-7
- Tarea 9 (Docs) -> espera todo
