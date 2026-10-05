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

/* ============================================================
   INICIALIZACIÓN – DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Módulos pendientes: catálogo, filtros, menú hamburguesa y navegación activa
});
