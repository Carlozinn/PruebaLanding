# 🐾 Coyoteando – Landing Page

> *A la caza de la mejor tecnología.*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-activo-22C4F2?logo=github)](https://carlozinn.github.io/Coyoteando/)
[![Versión](https://img.shields.io/badge/versión-v1.0.0-E8913A)](https://github.com/Carlozinn/Coyoteando/releases/tag/v1.0.0)

**Coyoteando** es la landing page de una tienda en línea de artículos electrónicos
(audífonos, cargadores inalámbricos, smartwatches y tablets). Está construida con
HTML5, CSS3 y JavaScript puro, sin frameworks, y se publica con GitHub Pages.

## 🌐 Sitio en vivo

👉 https://carlozinn.github.io/Coyoteando/

## 👥 Equipo

| Integrante | GitHub | Responsabilidades |
|------------|--------|-------------------|
| Carlos | [@Carlozinn](https://github.com/Carlozinn) | Estructura base, header, Inicio, Productos, filtros, paleta, menú móvil, GitHub Pages, accesibilidad, README y release |
| Jordi  | _pendiente_ | Quiénes somos, Contacto, validación, Políticas, footer, responsive y animaciones |

## 🗂 Estructura del proyecto

```
Coyoteando/
├── index.html        # Landing page (5 secciones)
├── css/
│   └── styles.css    # Estilos, paleta y responsive
├── js/
│   └── main.js       # Catálogo dinámico, filtros, menú y navegación
├── images/
│   └── logo.png      # Logo / mascota Coyoteando
└── README.md
```

## 🚀 Ejecutar localmente

```bash
git clone https://github.com/Carlozinn/Coyoteando.git
cd Coyoteando
```

Después abre `index.html` directamente en tu navegador, o usa la extensión
**Live Server** de VS Code (clic derecho sobre `index.html` → *Open with Live Server*).

## 🛠 Tecnologías

- **HTML5** semántico y accesible (ARIA, skip-link, foco visible)
- **CSS3** con variables, Grid, Flexbox y media queries
- **JavaScript ES6+** puro (sin frameworks ni librerías)

## 📝 Convención de commits

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| `feat:` | Nueva funcionalidad | `feat: agregar sección Inicio con hero` |
| `fix:` | Corrección de errores | `fix: cerrar menú móvil con Escape` |
| `style:` | Estilos / diseño | `style: estilizar tarjetas de productos` |
| `docs:` | Documentación | `docs: agregar README` |
| `chore:` | Mantenimiento | `chore: agregar .gitignore` |
| `a11y:` | Accesibilidad | `a11y: completar atributos ARIA` |
| `seo:` | Metadatos / SEO | `seo: agregar Open Graph` |
| `release:` | Preparación de versión | `release: changelog v1.0.0` |

## 🌿 Ramas principales

- **`main`** – versión estable publicada en GitHub Pages.
- **`develop`** – rama de integración; cada rama de funcionalidad se fusiona aquí antes de pasar a `main`.

## 📋 Changelog

### v1.0.0 – 2025-01-15

- Primera versión completa de la landing page Coyoteando.
- 5 secciones: Inicio, ¿Quiénes somos?, Productos / Servicios, Contacto y Políticas de seguridad.
- Catálogo de productos renderizado con JavaScript y filtros por categoría.
- Formulario de contacto validado con JavaScript.
- Acordeón accesible en Políticas de seguridad.
- Diseño responsive (desktop, tablet y móvil) con menú hamburguesa.
- Publicación en GitHub Pages.

---

Desarrollado como actividad académica para la materia Tecnologías para la construcción de software.
