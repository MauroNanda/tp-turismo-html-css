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

URL del repositorio: https://github.com/MauroNanda/tp-turismo-html-css
URL de la Demo https://mauronanda.github.io/tp-turismo-html-css/index.html

---

## Autores
Calisaya, Gabriel Omar
Guanca Venicio, Siomara Jael
Gutierrez Nanda, Mauro Nahuel
Quiroga, Irene del Rosario Yolanda
Verdeja, Glenda Sofía

Trabajo Práctico Integrador — Programación y Servicios Web  
Facultad de Ingeniería — Universidad Nacional de Jujuy (UNJU)  
2026
