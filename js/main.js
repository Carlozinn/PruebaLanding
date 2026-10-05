'use strict';

/* ============================================================
   COYOTEANDO – main.js
   Vanilla JavaScript puro (sin frameworks ni librerías).
   ============================================================ */

/* ============================================================
   1. CATÁLOGO DE PRODUCTOS
   ============================================================ */

/** Datos de los productos – mínimo 8, en 4 categorías */
const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Audífonos Coyote Pro X1',
    categoria: 'audifonos',
    categoriaLabel: 'Audífonos',
    precio: 1299,
    descripcion: 'Cancelación activa de ruido, 40 h de batería y luces LED cian. El coyote que todo lo escucha.',
    emoji: '🎧',
    badge: 'Más vendido'
  },
  {
    id: 2,
    nombre: 'Desert Sound TWS',
    categoria: 'audifonos',
    categoriaLabel: 'Audífonos',
    precio: 899,
    descripcion: 'True Wireless IPX5 con estuche de carga. Hasta 24 h de autonomía total. Ligeros y potentes.',
    emoji: '🎵',
    badge: ''
  },
  {
    id: 3,
    nombre: 'Audífonos Gamer Desert FX',
    categoria: 'audifonos',
    categoriaLabel: 'Audífonos',
    precio: 1599,
    descripcion: 'Surround 7.1 virtual, micrófono retráctil con cancelación de ruido y RGB personalizable.',
    emoji: '🎮',
    badge: 'Gamer'
  },
  {
    id: 4,
    nombre: 'Cargador Inalámbrico 15W',
    categoria: 'cargadores',
    categoriaLabel: 'Cargadores',
    precio: 599,
    descripcion: 'Carga rápida Qi 15W. Compatible con iPhone, Samsung, Pixel y más. Diseño ultradelgado.',
    emoji: '⚡',
    badge: 'Nuevo'
  },
  {
    id: 5,
    nombre: 'Base de Carga 3-en-1',
    categoria: 'cargadores',
    categoriaLabel: 'Cargadores',
    precio: 1099,
    descripcion: 'Carga simultánea: smartphone, smartwatch y audífonos. Un solo cable, todo listo.',
    emoji: '🔋',
    badge: ''
  },
  {
    id: 6,
    nombre: 'Power Bank 20,000 mAh',
    categoria: 'cargadores',
    categoriaLabel: 'Cargadores',
    precio: 799,
    descripcion: 'Carga rápida 22.5W con 3 salidas USB-A/C. El compañero ideal para tus expediciones.',
    emoji: '🔌',
    badge: ''
  },
  {
    id: 7,
    nombre: 'Smartwatch Tracker Pro',
    categoria: 'smartwatches',
    categoriaLabel: 'Smartwatches',
    precio: 2499,
    descripcion: 'GPS integrado, monitor de salud 24/7, resistente al agua 5 ATM. Rastrea cada aventura.',
    emoji: '⌚',
    badge: 'Premium'
  },
  {
    id: 8,
    nombre: 'Smartwatch Fit Coyote',
    categoria: 'smartwatches',
    categoriaLabel: 'Smartwatches',
    precio: 1799,
    descripcion: 'Más de 100 modos deportivos, pantalla AMOLED y batería de 14 días. Tu entrenador en la muñeca.',
    emoji: '🏃',
    badge: ''
  },
  {
    id: 9,
    nombre: 'Tablet Canyon 10"',
    categoria: 'tablets',
    categoriaLabel: 'Tablets',
    precio: 3999,
    descripcion: 'Android 14, pantalla Full HD 1080p, 6 GB RAM y 128 GB de almacenamiento. Sin límites.',
    emoji: '📱',
    badge: ''
  },
  {
    id: 10,
    nombre: 'Tablet Pro 12" + Stylus',
    categoria: 'tablets',
    categoriaLabel: 'Tablets',
    precio: 5999,
    descripcion: 'Stylus incluido, 8 GB RAM y 256 GB. La herramienta de los creadores más veloces del desierto.',
    emoji: '✏️',
    badge: 'Top'
  }
];

/** Formatea un número como precio en MXN (Intl.NumberFormat) */
function formatPrecio(precio) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0
  }).format(precio);
}

/** Crea el HTML de una tarjeta de producto */
function crearTarjetaHTML(producto) {
  const badge = producto.badge
    ? `<span class="product-badge" aria-label="Etiqueta: ${producto.badge}">${producto.badge}</span>`
    : '';

  return `
    <article class="product-card" data-categoria="${producto.categoria}" aria-label="Producto: ${producto.nombre}">
      ${badge}
      <div class="product-emoji" aria-hidden="true">${producto.emoji}</div>
      <span class="product-category">${producto.categoriaLabel}</span>
      <h3 class="product-name">${producto.nombre}</h3>
      <p class="product-desc">${producto.descripcion}</p>
      <p class="product-price">${formatPrecio(producto.precio)} <small>MXN</small></p>
      <button
        class="product-btn"
        type="button"
        aria-label="Agregar ${producto.nombre} al carrito de compras"
      >
        Agregar al carrito
      </button>
    </article>
  `.trim();
}

/** Renderiza los productos en el grid según el filtro activo */
function renderProductos(filtro) {
  const grid = document.getElementById('productos-grid');
  if (!grid) return;

  const filtrados = (filtro === 'todos')
    ? PRODUCTOS
    : PRODUCTOS.filter(p => p.categoria === filtro);

  if (filtrados.length === 0) {
    grid.innerHTML = '<p class="no-results">No hay productos en esta categoría aún. ¡Vuelve pronto!</p>';
    grid.setAttribute('aria-label', 'Catálogo – sin resultados');
    return;
  }

  grid.innerHTML = filtrados.map(crearTarjetaHTML).join('');
  grid.setAttribute('aria-label', `Catálogo de productos – ${filtrados.length} resultado(s)`);
}

/** Inicializa los botones de filtro */
function iniciarFiltros() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar activo de todos
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      // Activar el seleccionado
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      renderProductos(btn.dataset.filter || 'todos');
    });
  });
}

/* ============================================================
   2. MENÚ HAMBURGUESA
   ============================================================ */
function iniciarHamburger() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  // Toggle al hacer clic
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú de navegación');
  });

  const cerrarMenu = () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menú de navegación');
  };

  // Cerrar al hacer clic en cualquier enlace del menú
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', cerrarMenu);
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      cerrarMenu();
      btn.focus();
    }
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') &&
        !btn.contains(e.target) &&
        !menu.contains(e.target)) {
      cerrarMenu();
    }
  });
}

/* ============================================================
   3. ENLACE ACTIVO EN EL SCROLL (IntersectionObserver)
   ============================================================ */
function iniciarNavActiva() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  const headerH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '72',
    10
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
      }
    });
  }, {
    root: null,
    rootMargin: `-${headerH + 10}px 0px -55% 0px`,
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ============================================================
   4. VALIDACIÓN DEL FORMULARIO DE CONTACTO
   ============================================================ */

/** Reglas de validación por campo */
const VALIDADORES = {
  nombre: {
    validar: v => v.trim().length >= 2,
    msg: 'El nombre debe tener al menos 2 caracteres.'
  },
  correo: {
    validar: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    msg: 'Ingresa un correo electrónico válido (ej: tu@correo.com).'
  },
  mensaje: {
    validar: v => v.trim().length >= 10,
    msg: 'El mensaje debe tener al menos 10 caracteres.'
  }
};

/** Aplica el estado visual a un campo (correcto / error) */
function setEstadoCampo(input, esValido, msg) {
  const errorEl = document.getElementById(`${input.id}-error`);
  input.classList.toggle('error',   !esValido);
  input.classList.toggle('success',  esValido && input.value.trim() !== '');
  if (errorEl) errorEl.textContent = esValido ? '' : msg;
}

/** Valida un campo individual y devuelve true si es válido */
function validarCampo(input) {
  const regla = VALIDADORES[input.name];
  if (!regla) return true;

  const vacio = input.value.trim() === '';
  if (vacio) {
    setEstadoCampo(input, false, 'Este campo es obligatorio.');
    return false;
  }
  const esValido = regla.validar(input.value);
  setEstadoCampo(input, esValido, regla.msg);
  return esValido;
}

function iniciarFormulario() {
  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (!form || !successMsg) return;

  const campos = form.querySelectorAll('.form-input');

  // Validación en tiempo real al salir del campo (blur)
  campos.forEach(input => {
    input.addEventListener('blur', () => validarCampo(input));
    // Limpiar error mientras el usuario escribe (solo si ya tenía error)
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validarCampo(input);
    });
  });

  // Envío del formulario
  form.addEventListener('submit', e => {
    e.preventDefault();

    let todoValido = true;
    campos.forEach(input => {
      if (!validarCampo(input)) todoValido = false;
    });

    if (todoValido) {
      // Simulamos el envío exitoso
      successMsg.removeAttribute('hidden');
      form.reset();
      campos.forEach(input => input.classList.remove('success', 'error'));
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => successMsg.setAttribute('hidden', ''), 5000);
    } else {
      // Enfocar el primer campo con error
      const primerError = form.querySelector('.form-input.error');
      if (primerError) primerError.focus();
    }
  });
}

/* ============================================================
   INICIALIZACIÓN – DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizar el catálogo completo al cargar
  renderProductos('todos');

  // 2. Iniciar filtros por categoría
  iniciarFiltros();

  // 3. Menú hamburguesa
  iniciarHamburger();

  // 4. Enlace activo según el scroll
  iniciarNavActiva();

  // 5. Validación del formulario de contacto
  iniciarFormulario();

  // Módulos de Jordi (formulario, acordeón, footer) se registran en sus ramas
});
