# Portfolio — Santiago Ferreira

Portafolio creativo en HTML + CSS + JS puro, sin frameworks ni build steps.
Listo para abrir en VS Code y editar.

---

## Cómo abrirlo en VS Code

1. Descomprimí la carpeta `portfolio/`.
2. Abrí VS Code → **File** → **Open Folder…** → seleccioná `portfolio/`.
3. Instalá la extensión **Live Server** (Ritwick Dey) si no la tenés.
4. Click derecho sobre `index.html` → **Open with Live Server**.
   El sitio se abre en el navegador y se recarga solo cuando edites.

---

## Estructura

```
portfolio/
├── index.html                       ← Home (Hero, Work, About, Stack, Contact)
├── maternidad-peralta-ramos.html    ← Case Study 01
├── live-the-moment.html             ← Case Study 02
├── frames.html                      ← Case Study 03
├── css/
│   └── styles.css                   ← TODO el estilo del sitio vive acá
├── js/
│   └── main.js                      ← Menú móvil + scroll reveal
└── assets/
    └── images/
        ├── cover-maternidad.png         ← Tile del index
        ├── cover-live-the-moment.png    ← Tile del index
        ├── cover-frames.png             ← Tile del index
        ├── case-maternidad.png          ← Imagen rica dentro del case study
        ├── case-live-the-moment.png     ← Imagen rica dentro del case study
        └── case-frames.png              ← Imagen rica dentro del case study
```

---

## Qué editar más seguido

### Cambiar el handle de Instagram
En el footer de **todas** las páginas HTML, buscá:
```html
<a href="https://instagram.com/santiago_ferreira7981" ...>
```
Reemplazá la URL si tu usuario está en otra red.

### Sumar más redes (LinkedIn, Behance, etc.)
En el footer de cada página, dentro del `<footer class="foot">`, duplicá el `<a>` del Instagram con la nueva URL.

### Editar textos
- **Hero / About / Stack / Contact** → `index.html`
- **Cada case study** → su archivo `.html` correspondiente (busca los `<section class="case-...">`)

### Cambiar imágenes
Reemplazá los archivos en `assets/images/` manteniendo el mismo nombre y extensión, o cambiá la ruta dentro del `<img src="...">` correspondiente.

### Cambiar colores / tipografía
Todos los valores viven al principio de `css/styles.css`, en `:root { --bg, --ink, ... }`.

---

## Subirlo online (gratis)

**Opción más rápida → Netlify Drop**
1. Andá a https://app.netlify.com/drop
2. Arrastrá la carpeta `portfolio/` completa.
3. Listo. Te da una URL pública.

**Opción profesional → GitHub Pages**
1. Subí la carpeta a un repo de GitHub.
2. Settings → Pages → Source: `main` branch / root.
3. Te da una URL `usuario.github.io/repo`.

---

## Notas técnicas

- Inter se carga desde Google Fonts (necesita internet la primera vez).
- Funciona en desktop y mobile (breakpoint en 720px).
- Respeta `prefers-reduced-motion` — sin animaciones para quien las desactivó.
- Sin tracking, sin cookies, sin dependencias externas más allá de la font.
