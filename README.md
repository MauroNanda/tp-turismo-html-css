# Turismo Jujuy

Proyecto universitario desarrollado para la cátedra de Programación y Servicios Web (UNJU). Consiste en un sitio web de turismo enfocado en los destinos de la provincia de Jujuy, Argentina. El sitio cubre seis secciones principales: Inicio, Destinos, Agencias, Precios, Blog y Contacto.

El objetivo técnico fue construir un producto funcional y visualmente sólido utilizando únicamente HTML5 y CSS3.

---

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica con uso de etiquetas como `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` y `<nav>`.
- **CSS3 puro**: Todo el comportamiento visual e interactivo fue resuelto exclusivamente con CSS. Esto incluye el menú hamburguesa mobile, el modo oscuro, los tooltips, las animaciones de scroll y el carrusel de testimonios.

---

## Arquitectura CSS y Decisiones de Diseño

### Variables CSS (Custom Properties)

Toda la paleta de colores, tipografía y espaciados del proyecto se centraliza en el archivo `css/global.css` mediante variables CSS definidas en el selector `:root`:

```css
:root {
    --verde-unju: #2e7d32;
    --verde-claro: #4caf50;
    --color-fondo: #f8f9fa;
    --color-texto-principal: #111827;
    --color-blanco: #ffffff;
    --sombra: 0 4px 15px rgba(0, 0, 0, 0.08);
}
```

Este enfoque permite modificar la identidad visual completa del sitio desde un único punto, sin necesidad de buscar y reemplazar valores en cada archivo.

### Separación de Archivos CSS

Cada vista del sitio carga sus propios estilos específicos además de las hojas globales. La estructura de carga en cada HTML sigue este orden:

```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/[pagina].css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
```

- `global.css`: Variables, tipografía base (Google Fonts - Nunito), reset y clases utilitarias compartidas.
- `style.css`: Textura de fondo decorativa aplicada como pseudo-elemento fijo sobre el `body`.
- `header.css`: Lógica completa del header sticky, mega-menú y modo oscuro.
- `footer.css`: Footer compacto de tres columnas con newsletter.
- `[pagina].css`: Estilos exclusivos de cada sección (index, contacto, precios, etc.).

Esta separación garantiza que los cambios en una sección no afecten inadvertidamente a otras, y facilita el trabajo en paralelo entre integrantes del equipo.

### Dark Mode sin JavaScript

El modo oscuro está implementado íntegramente en CSS aprovechando la pseudo-clase `:has()` en combinación con un `<input type="checkbox">` oculto ubicado al inicio del `<body>`.

Cuando el usuario activa el toggle, el checkbox se marca y la siguiente regla en `header.css` redefine las variables globales para toda la página:

```css
:root:has(#dark-mode-toggle:checked) {
    --color-fondo: #1a1a2e;
    --color-texto-principal: #e8e8e8;
    --color-blanco: #16213e;
    /* ... resto de variables ... */
}
```

Al estar todas las propiedades de color referenciadas mediante variables, el cambio se propaga de forma instantánea al documento completo sin recargar ni ejecutar código.

### Diseño Responsivo

El sitio fue construido con un enfoque mobile-first. Se utilizan dos técnicas de maquetación principales:

- **CSS Grid**: Para layouts de dos o más columnas, como la sección de contacto (formulario + información + mapa) y la grilla de tarjetas de destinos.
- **Flexbox**: Para la barra de navegación, elementos del footer y alineación interna de componentes.

Los puntos de quiebre (`@media`) se definieron en `900px` para la navegación mobile y `768px` para componentes de contenido como el blog y el formulario de contacto.

### Efectos Visuales Avanzados

**Clip-path**: Las imágenes de la sección de destinos destacados utilizan `clip-path: polygon()` para adoptar una forma de escudo en su estado normal, que se transiciona suavemente a rectangular al hacer hover sobre la tarjeta.

```css
.tarjeta-destino img {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
    transition: clip-path 0.4s ease;
}
```

**Scroll Reveal**: Las secciones del Home aparecen con una animación de entrada al ingresar al viewport, implementada con `animation-timeline: view()`, una propiedad CSS nativa que no requiere observadores JavaScript. Se envuelve en `@supports` para garantizar compatibilidad con navegadores que no la soporten.

---

## Componentes Globales

### Header

El header es `position: sticky` y se replica en las seis páginas del sitio. Contiene:

- Logo SVG con animación de rotación al hover.
- Mega-menú desplegable para la sección "Destinos", implementado con `:hover` + `visibility`/`opacity` + `transition`. No usa JavaScript.
- Toggle de modo oscuro que alterna entre sun/moon icon mediante `:has()` + `display: none/inline`.
- Menú hamburguesa para mobile: un `<input type="checkbox">` oculto actúa como estado, y el selector `~` (hermano general) controla la apertura del menú con una transición de `max-height`.

### Footer Compacto

El footer sigue una estructura de tres columnas (descripción + newsletter, navegación interna, redes + mapa) que colapsa a una sola columna en pantallas chicas. Se estandarizó en todas las páginas utilizando la misma estructura HTML y el archivo compartido `css/footer.css`. Las variables CSS garantizan que responda correctamente al modo oscuro sin reglas adicionales.

---

## Formulario de Contacto y Validaciones

La página de contacto implementa validaciones nativas HTML5 potenciadas con CSS. Los campos requeridos muestran retroalimentación visual inmediata sin JavaScript:

```css
/* Estado válido: borde verde */
.campo input:required:valid {
    border-color: #10b981;
}

/* Estado inválido: borde rojo, solo si el usuario ya escribió */
.campo input:required:invalid:not(:placeholder-shown) {
    border-color: #ef4444;
}
```

El uso de `:not(:placeholder-shown)` evita que los campos arranquen marcados en rojo al cargar la página, mejorando la experiencia de usuario.

---

## Tabla Comparativa de Precios

La tabla de precios aplica pseudo-clases estructurales para mejorar la legibilidad:

- `tbody tr:nth-child(even)`: Alterna el fondo de filas pares con un gris muy sutil (efecto cebra).
- `tbody tr:hover`: Resalta la fila completa y cambia el color del texto al verde de marca al pasar el cursor.
- Tooltips informativos implementados con `::after` y `::before`, sin librerias externas.

---

## Despliegue

El proyecto está preparado para ser publicado directamente desde GitHub Pages, dado que se trata de archivos estáticos sin dependencias de servidor ni proceso de build. Para activarlo, basta con habilitar GitHub Pages desde la configuración del repositorio apuntando a la rama `main`.

- **Repositorio:** [github.com/MauroNanda/tp-turismo-html-css](https://github.com/MauroNanda/tp-turismo-html-css)
- **Demo en vivo:** [mauronanda.github.io/tp-turismo-html-css](https://mauronanda.github.io/tp-turismo-html-css/index.html)

---

## Autores

- Calisaya, Gabriel Omar
- Guanca Venicio, Siomara Jael
- Gutierrez Nanda, Mauro Nahuel
- Quiroga, Irene del Rosario Yolanda
- Verdeja, Glenda Sofia

Trabajo Practico Integrador — Programacion y Servicios Web  
Facultad de Ingenieria — Universidad Nacional de Jujuy (UNJU)  
2026

---

## Fase 2 — Bootstrap, jQuery y Buenas Prácticas

En la segunda fase del proyecto ampliamos el sitio incorporando frameworks y librerías de desarrollo moderno. El objetivo fue adaptar el trabajo anterior de HTML y CSS puro para que conviva con Bootstrap 5 y jQuery 3, manteniendo la identidad visual ya lograda y sumando interactividad real a cada sección.

### Tecnologías incorporadas en Fase 2

- **Bootstrap 5.3.3** (instalación local en `vendor/bootstrap/`): Grillas responsivas, componentes de navegación, modal, carousel, tooltips, formularios y sistema de utilidades.
- **jQuery 3.7.1** (CDN): Animaciones, filtros dinámicos, validación de formularios y manipulación del DOM en todas las páginas.
- **Font Awesome 6.5.0** (CDN): Íconos vectoriales en navbar, botones, cards y footer.

### Instalación local de Bootstrap

En lugar de depender de un CDN externo, descargamos los archivos minificados de Bootstrap y los alojamos dentro del propio proyecto:

```
vendor/
└── bootstrap/
    ├── css/
    │   └── bootstrap.min.css
    └── js/
        └── bootstrap.bundle.min.js
```

Esto permite que el sitio funcione correctamente en entornos sin conexión a internet y elimina la dependencia de servicios externos en la entrega final.

### Header y Footer unificados (Partials)

Una de las decisiones de arquitectura más importantes de esta fase fue centralizar el header y el footer. Dado que ambos componentes se repetían idénticos en las seis páginas, los extrajimos a archivos HTML independientes:

```
partials/
├── header.html
└── footer.html
```

Cada página los carga dinámicamente mediante el script `js/layout.js`, que utiliza `fetch()` e `innerHTML` para inyectar el contenido:

```javascript
// js/layout.js
async function cargarPartial(selector, url) {
    const respuesta = await fetch(url);
    const html = await respuesta.text();
    document.querySelector(selector).innerHTML = html;
}
cargarPartial('#header-placeholder', 'partials/header.html');
cargarPartial('#footer-placeholder', 'partials/footer.html');
```

Gracias a esto, cualquier corrección sobre el header o footer se aplica a todo el sitio modificando un único archivo. Esta arquitectura requiere que el sitio se sirva desde un servidor local (Live Server, `npx serve`, etc.) o desde un hosting, ya que el protocolo `file://` bloquea las peticiones `fetch` por razones de seguridad del navegador (política CORS).

### Interactividad jQuery por página

Cada sección del sitio tiene su propio archivo JavaScript que concentra la lógica jQuery correspondiente:

| Página | Archivo | Funcionalidad principal |
|---|---|---|
| Home | `js/home.js` | Contador animado con `.animate()`, hero con `fadeIn` y `delay` |
| Destinos | `js/destinos.js` | Filtros dinámicos con `.hide()` / `fadeIn()`, zoom en cards |
| Agencias | `js/agencias.js` | Flip cards con `.toggleClass()`, rating interactivo con estrellas |
| Precios | `js/precios.js` | Hover de filas con `.mouseenter`, tooltips Bootstrap con jQuery |
| Blog | `js/blog.js` | Filtro por categorías, animación al hacer scroll con `checkReveal()` |
| Contacto | `js/contacto.js` | Validación en tiempo real, spinner de carga, modal de confirmación |

### Módulo Educativo: Simulación de Phishing

Se implementó un módulo interactivo de concientización sobre seguridad informática, accesible desde un botón flotante en la página de inicio. Al abrirlo, el usuario ve un correo electrónico bancario falso con cinco señales de fraude ocultas. Al hacer clic sobre cada una, jQuery muestra un popover explicando por qué esa parte del correo es sospechosa.

Las cinco trampas del correo simulado son:
1. **Logo falso**: "Banc0 NacionaI" (caracteres sustituidos para imitar el original).
2. **Remitente fraudulento**: dominio que imita al oficial pero no es el real.
3. **Asunto con urgencia extrema**: técnica clásica de manipulación emocional.
4. **Enlace falso**: botón que aparenta llevar al sitio oficial pero no lo hace.
5. **Solicitud de datos sensibles**: ningún banco real pide PIN, contraseña ni CVC por correo.

El módulo no almacena ningún dato del usuario ni ejecuta código malicioso; es íntegramente educativo.

### Sprite CSS

Para cumplir con el requisito de la consigna, implementamos una imagen sprite en formato SVG (`images/sprites/social-sprite.svg`) que concentra en un solo archivo los íconos de tres redes sociales y un marcador de ubicación. La técnica de `background-position` en `css/sprites.css` permite mostrar cada ícono recortando una región específica del sprite:

```css
.social-icon {
    background-image: url('../images/sprites/social-sprite.svg');
    background-size: 128px 32px;
}

.icon-facebook  { background-position: 0 0; }
.icon-instagram { background-position: -32px 0; }
.icon-twitter   { background-position: -64px 0; }
.icon-marker    { background-position: -96px 0; }
```

El sprite se aplica en los íconos de redes sociales del footer (presente en las seis páginas gracias al sistema de partials) y en el botón "Ver Destinos" de la página de inicio.

### Estructura de archivos — Fase 2

```
tp-turismo-html-css/
├── css/
│   ├── phishing.css       ← Estilos del módulo educativo
│   └── sprites.css        ← Sistema de sprite CSS
├── images/
│   └── sprites/
│       └── social-sprite.svg  ← Sprite vectorial de íconos
├── js/
│   ├── layout.js          ← Carga dinámica de header y footer
│   ├── home.js
│   ├── destinos.js
│   ├── agencias.js
│   ├── precios.js
│   ├── blog.js
│   ├── contacto.js
│   └── phishing.js        ← Lógica del módulo educativo
├── partials/
│   ├── header.html        ← Header unificado
│   └── footer.html        ← Footer unificado
└── vendor/
    └── bootstrap/
        ├── css/bootstrap.min.css
        └── js/bootstrap.bundle.min.js
```

---
