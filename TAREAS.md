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
Depende de: Tarea 0 + Tarea 1 mergeadas en main

Descripcion:
Implementar un modulo interactivo en index.html donde el usuario lee un email
de phishing simulado y tiene que identificar las senales de fraude haciendo clic.
Cada clic revela un tooltip con la explicacion. Al final puede ver el puntaje.

--- PLAN PASO A PASO ---

Paso 1 — HTML en index.html
- Agregar un boton flotante o en la seccion hero: "Simulacion de Phishing"
  Usar clase Bootstrap: btn btn-danger, con icono fa-shield-halved
- Agregar el modal Bootstrap con id="modalPhishing"
  Estructura del modal:
    - Header: titulo con advertencia (fondo rojo/naranja)
    - Body: un email falso simulado con 5 trampas ocultas marcadas con clase .trampa
    - Footer: contador "X/5 senales encontradas" + boton "Revelar todo"

Contenido del email falso (trampa visual):
  - Remitente falso: soporte@turismo-jujuy.com.ar.phish.net  <-- trampa 1
  - Asunto con urgencia: "URGENTE: Tu cuenta sera suspendida en 24hs"  <-- trampa 2
  - Link malicioso con texto correcto pero URL falsa  <-- trampa 3
  - Solicitud de datos personales (contraseña / tarjeta)  <-- trampa 4
  - Logo con errores o pixelado  <-- trampa 5

Paso 2 — js/phishing.js (nuevo)
- Al abrir el modal: resetear el contador y ocultar las explicaciones
- Cada .trampa tiene data-explicacion="..."
- Al hacer clic en .trampa:
    * toggleClass('encontrada') para marcarla visualmente (borde rojo + icono check)
    * Mostrar un tooltip/popover Bootstrap con la explicacion del peligro
    * Actualizar contador: #contador-phishing
    * Si se encontraron las 5: mostrar mensaje de felicitacion con jQuery .fadeIn()
- Boton "Revelar todo": hace .addClass('encontrada') a todas las .trampa que faltan
  y actualiza el contador a 5/5

Paso 3 — css/phishing.css (nuevo)
- Estilo para el email simulado (fuente tipo correo, borde, padding)
- .trampa: cursor pointer, subrayado punteado para indicar que es interactivo
- .trampa.encontrada: fondo rojo claro, borde rojo, tachado segun el caso
- Animacion de pulso sutil en las trampas no encontradas para guiar al usuario
- Responsive: el modal debe verse bien en mobile (modal-dialog-scrollable)

Paso 4 — Verificacion
- El boton abre el modal correctamente
- Las 5 trampas se pueden clickear y muestran feedback visual
- El contador sube de 0/5 a 5/5
- "Revelar todo" completa las que faltan
- No se almacena ningun dato real del usuario
- Se ve bien en mobile

Paso 5 — Commit
  git add index.html js/phishing.js css/phishing.css
  git commit -m "feat(phishing): agrega modulo educativo de simulacion de phishing con jquery"
  git push origin feature/phishing-educativo

Archivos:
- index.html (agregar boton + modal)
- js/phishing.js (nuevo)
- css/phishing.css (nuevo)

Estado: [x] Completada

---

## Tarea 8: Sprite CSS + Iconos

Rama: feature/sprite-iconos
Depende de: Tarea 0 + Tareas 1-7 mergeadas

Descripcion:
Crear una imagen sprite con los iconos de redes sociales y aplicarla
en el footer unificado mediante background-position en sprites.css.
La consigna pide que el sprite se use en: redes sociales, botones e iconos personalizados.

--- PLAN PASO A PASO ---

Paso 1 — Crear la imagen sprite (social-sprite.svg)
- Generar una imagen horizontal (96x32px) que contenga 3 iconos de 32x32px cada uno:
    * 0px   → Facebook (cuadrado azul)
    * 32px  → Instagram (cuadrado degradado naranja/rosado)
    * 64px  → Twitter/X (cuadrado negro)
- Guardar en: images/sprites/social-sprite.svg
- La imagen puede generarse con IA o con cualquier editor grafico

Paso 2 — Completar css/sprites.css
- Desbloquear las clases comentadas y ajustar las posiciones:
    .icon-facebook  { background-position: 0 0; }
    .icon-instagram { background-position: -32px 0; }
    .icon-twitter   { background-position: -64px 0; }
- Agregar estados :hover con un filtro sutil para indicar interactividad
- Verificar que background-size coincide con el tamano de la imagen generada

Paso 3 — Aplicar el sprite en partials/footer.html
- Reemplazar los <i class="fa-brands..."> de Facebook e Instagram por:
    <a href="#" class="social-icon icon-facebook" aria-label="Facebook"></a>
    <a href="#" class="social-icon icon-instagram" aria-label="Instagram"></a>
    <a href="#" class="social-icon icon-twitter" aria-label="Twitter"></a>
- Como el footer es un partial unificado, el cambio se aplica a las 6 paginas solas

Paso 4 — Aplicar el sprite en al menos un botón (consigna pide: botones e iconos)
- Opcion: agregar un icono sprite al boton de Contacto de la seccion del Home
  o crear una clase .icon-marker para un icono de ubicacion en el footer
- Esto demuestra que el sprite no solo se usa en redes, sino tambien en botones

Paso 5 — Verificacion
- Los iconos se ven correctamente en cada pagina (via footer unificado)
- No hay llamadas a Font Awesome para los iconos de redes sociales del footer
- El sprite se ve bien en mobile (no pixelado)
- Verificar con DevTools: Network > Images, que solo carga social-sprite.svg

Paso 6 — Commit
    git add images/sprites/social-sprite.svg css/sprites.css partials/footer.html index.html
    git commit -m "feat(sprites): implementa sprite CSS para iconos de redes sociales y boton"
    git push origin feature/sprite-iconos

Archivos:
- images/sprites/social-sprite.svg (nuevo)
- css/sprites.css (completar)
- partials/footer.html (reemplazar fa-brands por sprite)

Estado: [x] Completada

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
